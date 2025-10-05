from clustering.DynamicClusterSpace import DynamicClusterSpace

class PatchWrapper:
    def __init__(self, patch, vector):
        self.patch = patch
        self.vector = vector

class PatchIndex:
    def __init__(self, *, vector_dim, sim_threshold, label_vectorizer):
        self.label_vectorizer = label_vectorizer
        self.strict_index = dict()
        self.vector_index = DynamicClusterSpace(dim=vector_dim, sim_threshold=sim_threshold)

    def put_patch(self, patch, label):
        self.put_in_strict_index(patch, label)
        self.put_in_cluster(patch, label)

    def get_exact(self, label):
        return self.strict_index.get(label, [])

    def get_similar(self, label):
        vector = self.label_vectorizer.transform([label])[0]
        return [w.patch for w in self.vector_index.find_similar_elems([vector])]

    def get_patches(self, label):
        return set(self.get_exact(label)).union(set(self.get_similar(label)))

    def put_in_strict_index(self, patch, label):
        l = self.strict_index.get(label, [])
        if patch not in l:
            l.append(patch)
        self.strict_index[label] = l

    def put_in_cluster(self, patch, label):
        vector = self.label_vectorizer.transform([label])[0]
        self.vector_index.add_elem(PatchWrapper(patch, vector))
