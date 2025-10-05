from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import sqlite3
import uuid

from .ImageClusterer import ImageClusterer

app = FastAPI(title="Pattern Recognition Server")

DB_PATH = "../../backend/src/main/resources/deep_sky_db.sqlite"

class CreateClustersRequest(BaseModel):
    image_id: str
    img_link: str


class AddLabelRequest(BaseModel):
    patch_id: str
    collection_id: str
    name: str
    embedding: bytes | None = None


class GetPatchesRequest(BaseModel):
    collection_id: str

PATCH_SIZE = 64
DEPTH = 1
OVERLAP = 0.5

@app.post("/clusters/create")
def create_clusters(req: CreateClustersRequest):
    cluster_id = str(uuid.uuid4())
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute("SELECT id FROM Image WHERE id = ?", (req.image_id,))
    if not cur.fetchone():
        conn.close()
        raise HTTPException(status_code=404, detail="Image not found")

    clusterer = ImageClusterer(patch_size=PATCH_SIZE, sim_threshold=0.01, depth=DEPTH, overlap=OVERLAP)
    clusterer.analyze(req.img_link)
    for cluster in clusterer.patch_cluster_space.cluster.clusters:
        cur.execute("INSERT INTO PatchCluster (id, image_id, centroid) VALUES (?, ?, ?)",
                    (uuid.uuid4(), req.image_id, cluster.centroid))
        for patch in cluster.patches:
            patch_id = str(uuid.uuid4())
            cur = conn.cursor()
            embedding_bytes = patch.embedding.tobytes()
            cur.execute("""
                        INSERT INTO Patch (id, patchcluster_id, height, width, x, y, embedding)
                        VALUES (?, ?, ?, ?, ?, ?, ?)
                        """, (patch_id, cluster_id, patch.h, patch.w, patch.x, patch.y, embedding_bytes))

    conn.commit()
    conn.close()
    return {"status": "ok"}


@app.post("/label/add")
def add_label(req: AddLabelRequest):
    label_id = str(uuid.uuid4())
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute("SELECT id FROM Patch WHERE id = ?", (req.patch_id,))
    if not cur.fetchone():
        conn.close()
        raise HTTPException(status_code=404, detail="Patch not found")

    cur.execute("SELECT id FROM Collection WHERE id = ?", (req.collection_id,))
    if not cur.fetchone():
        conn.close()
        raise HTTPException(status_code=404, detail="Collection not found")

    cur.execute("""
        INSERT INTO Label (id, patch_id, collection_id, name, embedding)
        VALUES (?, ?, ?, ?, ?)
    """, (label_id, req.patch_id, req.collection_id, req.name, req.embedding))

    conn.commit()
    conn.close()
    return {"status": "ok", "label_id": label_id}
