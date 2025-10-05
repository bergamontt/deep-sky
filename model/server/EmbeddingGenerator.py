import torch
from torchvision import models, transforms
from PIL import Image

class EmbeddingGenerator:
    def __init__(self):
        model = models.resnet50(pretrained=True)
        model.eval()
        self.embedding_model = torch.nn.Sequential(*list(model.children())[:-1])
        self.preprocess = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])
        self.dim = 2048

    def get_embedding(self, img: Image.Image):
        img_t = self.preprocess(img).unsqueeze(0)
        with torch.no_grad():
            embedding = self.embedding_model(img_t)
        return embedding.squeeze().numpy()