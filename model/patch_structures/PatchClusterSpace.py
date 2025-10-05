from clustering.DynamicClusterSpace import DynamicClusterSpace

class PatchWrapper:
    def __init__(self, patch):
        self.patch = patch
        self.vector = patch.embedding

class PatchClusterSpace:
    def __init__(self, *, embedding_dim, sim_threshold):
        self.cluster = DynamicClusterSpace(dim=embedding_dim, sim_threshold=sim_threshold)

    def add_patch(self, patch):
        self.cluster.add_elem(PatchWrapper(patch))

    def get_similar(self, patches):
        vectors = [p.embedding for p in patches]
        return [p.patch for p in self.cluster.find_similar_elems(vectors)]