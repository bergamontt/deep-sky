import os
import tempfile
import requests
import numpy as np
from PIL import Image
from patch_structures.PatchClusterSpace import PatchClusterSpace
from patch.Patch import Patch
from .EmbeddingGenerator import EmbeddingGenerator


class ImageClusterer:
    def __init__(self, *, sim_threshold=0.6, patch_size=64, depth=0, overlap=0.5):
        self.sim_threshold = sim_threshold
        self.patch_size = patch_size
        self.depth = depth
        self.overlap = overlap
        self.embedding_generator = EmbeddingGenerator()

    def analyze(self, image_link):
        img_path = self.download_img(image_link)
        img = Image.open(img_path).convert("RGB")

        self.patch_cluster_space = PatchClusterSpace(
            embedding_dim=self.embedding_generator.dim, sim_threshold=self.sim_threshold)
        patches = self.find_patches(img)
        for patch in patches:
            self.patch_cluster_space.add_patch(patch)
        self.delete_image(img_path)

    def download_img(self, image_link):
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/127.0.0.0 Safari/537.36"
        }
        response = requests.get(image_link, headers=headers, timeout=10)
        response.raise_for_status()
        suffix = os.path.splitext(image_link)[1] or ".jpg"
        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=suffix)
        temp_file.write(response.content)
        temp_file.close()
        return temp_file.name

    def delete_image(self, img_path):
        try:
            os.remove(img_path)
        except FileNotFoundError:
            pass

    def find_patches(self, img: Image.Image):
        img_np = np.array(img)
        h, w = img_np.shape[:2]
        all_patches = []

        for d in range(self.depth + 1):
            scale = 2 ** d
            patch_w = patch_h = self.patch_size * scale

            stride = int(patch_w * (1 - self.overlap))
            if stride < 1:
                stride = 1

            for y in range(0, h - patch_h + 1, stride):
                for x in range(0, w - patch_w + 1, stride):
                    patch_img = img.crop((x, y, x + patch_w, y + patch_h))
                    patch_img_resized = patch_img.resize((self.patch_size, self.patch_size))
                    embedding = self.embedding_generator.get_embedding(patch_img_resized)
                    patch = Patch(x=x, y=y, w=patch_w, h=patch_h, embedding=embedding)
                    all_patches.append(patch)

        return all_patches