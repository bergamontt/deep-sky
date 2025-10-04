from pathlib import Path
import pyvips

def valid_file(file):
    valid_extensions = {'.jpg', '.jpeg', '.tiff', '.tif'}
    return file.is_file() and file.suffix in valid_extensions

def convert_to_dzi(input_folder, output_folder="storage"):
    input_path = Path(input_folder)
    output_path = Path(output_folder)
    output_path.mkdir(exist_ok=True)

    for file_path in input_path.iterdir():
        if not valid_file(file_path):
            continue

        file_name = file_path.stem

        image_output_dir = output_path / file_name
        image_output_dir.mkdir(exist_ok=True)

        dzi_output_path = str(image_output_dir / file_name)
        image = pyvips.Image.new_from_file(str(file_path), access='sequential')
        image.dzsave(dzi_output_path, tile_size=256, overlap=1, q=90)


if __name__ == "__main__":
    input_path_folder = "img"
    convert_to_dzi(input_path_folder)