import numpy as np
import hnswlib

class DynamicClusterSpace:
    class Cluster:
        def __init__(self, elem, cluster_id):
            self.elements = [elem]
            self.centroid = elem.vector.copy()
            self.n = 1
            self.id = cluster_id

        def add_elem(self, elem):
            self.n += 1
            self.centroid = self.centroid + (elem.vector - self.centroid) / self.n
            self.elements.append(elem)

    def __init__(self, *, dim, sim_threshold=0.5):
        self.sim_threshold = sim_threshold

        self.clusters_index = hnswlib.Index(space='l2', dim=dim)
        self.clusters_index.init_index(max_elements=100_000, ef_construction=200, M=32, random_seed=42)
        self.clusters_index.set_ef(500)

        self.clusters_list = []
        self.next_id = 0

    def add_elem(self, elem):
        if not self.clusters_list:
            self.__add_new_cluster(elem)
            return

        ids, distances = self.clusters_index.knn_query(elem.vector[np.newaxis, :], k=1)
        nearest_id = ids[0][0]
        distance = distances[0][0]

        if self.__close_enough(distance):
            cluster = next(c for c in self.clusters_list if c.id == nearest_id)
            cluster.add_elem(elem)

            self.clusters_index.add_items(cluster.centroid[np.newaxis, :], np.array([cluster.id]))
        else:
            self.__add_new_cluster(elem)

    def find_similar_elems(self, vectors):
        res = set()
        for vector in vectors:
            ids, distances = self.clusters_index.knn_query(vector, k=len(self.clusters_list))
            ids = ids[0]
            distances = distances[0]
            for cluster_id, distance in zip(ids, distances):
                if self.__close_enough(distance):
                    cluster = next(c for c in self.clusters_list if c.id == cluster_id)
                    for elem in cluster.elements:
                        res.add(elem)
        return res

    def __add_new_cluster(self, elem):
        cluster = self.Cluster(elem, self.next_id)
        self.clusters_list.append(cluster)
        self.clusters_index.add_items(cluster.centroid[np.newaxis, :], np.array([self.next_id]))
        self.next_id += 1

    def __close_enough(self, distance):
        return 1 / (1 + distance) >= self.sim_threshold

    def __len__(self):
        return len(self.clusters_list)

    def __iter__(self):
        return iter(self.clusters_list)
