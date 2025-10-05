from sklearn.feature_extraction.text import HashingVectorizer
from sklearn.decomposition import IncrementalPCA
from sklearn.preprocessing import Normalizer
from sklearn.pipeline import make_pipeline
import re
import time

class IncrementalLSATransformer:
    def __init__(self, n_components=100, n_features=10000, batch_size=10000):
        self.n_components = n_components
        self.n_features = n_features
        self.batch_size = batch_size

        self.vectorizer = HashingVectorizer(
            n_features=n_features,
            stop_words='english',
            alternate_sign=False,
            norm='l2',
            preprocessor=self.__clean_text
        )

        self.svd = IncrementalPCA(n_components=n_components, batch_size=batch_size)
        self.normalizer = Normalizer(copy=False)
        self.pipeline = None

    def fit(self, document_stream):
        batch = []
        for i, doc in enumerate(document_stream, 1):
            batch.append(doc)
            if i % self.batch_size == 0:
                X = self.vectorizer.transform(batch)
                self.svd.partial_fit(X.toarray())
                batch = []

        if batch:
            X = self.vectorizer.transform(batch)
            self.svd.partial_fit(X.toarray())

        self.pipeline = make_pipeline(self.svd, self.normalizer)
        return self

    def transform(self, documents):
        X = self.vectorizer.transform(documents)
        return self.pipeline.transform(X.toarray())

    def fit_transform(self, document_stream):
        self.fit(document_stream)
        return self.transform(document_stream)

    @staticmethod
    def __clean_text(text):
        text = re.sub(r"={2,}.*?={2,}", " ", text)
        text = re.sub(r"http\S+|www\.\S+", " ", text)
        text = re.sub(r"\d+", " ", text)
        text = re.sub(r"[^a-zA-Z\s]", " ", text)
        text = re.sub(r"\s+", " ", text)
        return text.strip().lower()

