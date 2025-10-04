from pathlib import Path
import requests
import pyvips
import os

def download_images(urls, img_folder="img"):
    Path(img_folder).mkdir(exist_ok=True)

    downloaded_images = []
    for url in urls:
        filename = url.split('/')[-1]
        file_path = os.path.join(img_folder, filename)

        if os.path.exists(file_path):
            continue

        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(file_path, "wb") as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

        downloaded_images.append(file_path)

    return downloaded_images

def create_preview(image_path, preview_folder='preview', max_size=500, quality=90):
    Path(preview_folder).mkdir(exist_ok=True)

    image = pyvips.Image.new_from_file(image_path, access='sequential')

    scale = max_size / min(image.width, image.height)
    scaled_image = image.resize(scale)

    left = (scaled_image.width - max_size) // 2
    top = (scaled_image.height - max_size) // 2
    thumbnail = scaled_image.extract_area(left, top, max_size, max_size)

    file_name = Path(image_path).stem + '.jpg'
    preview_path = os.path.join(preview_folder, file_name)

    thumbnail.jpegsave(preview_path, Q=quality)

def valid_file(file):
    valid_extensions = {".jpg", ".jpeg", ".tiff", ".tif"}
    return file.is_file() and file.suffix in valid_extensions

def convert_to_dzi(input_folder="img", output_folder="storage"):
    input_path = Path(input_folder)
    output_path = Path(output_folder)
    output_path.mkdir(exist_ok=True)

    for file_path in input_path.iterdir():
        if not valid_file(file_path):
            continue

        create_preview(str(file_path))
        file_name = file_path.stem

        image_output_dir = output_path / file_name
        image_output_dir.mkdir(exist_ok=True)

        dzi_output_path = str(image_output_dir / file_name)
        image = pyvips.Image.new_from_file(str(file_path), access="sequential")
        image.dzsave(dzi_output_path, tile_size=256, overlap=1)

if __name__ == "__main__":

    default_urls = [
        "https://esahubble.org/media/archives/images/original/heic0707a.tif",
        "https://esahubble.org/media/archives/images/original/heic0604a.tif",
        "https://esahubble.org/media/archives/images/original/heic1302a.tif",
        "https://esahubble.org/media/archives/images/original/heic0506a.tif",
        "https://esahubble.org/media/archives/images/publicationtiff10k/heic1502a.tif"
    ]

    download_images(default_urls)
    convert_to_dzi()