import numpy as np

class Patch:
    def __init__(self, *, embedding: np.ndarray, x: int, y: int, w: int, h: int):
        self.embedding = embedding
        self.x = x
        self.y = y
        self.w = w
        self.h = h