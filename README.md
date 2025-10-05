
# 🌌 Deep Sky

**Deep sky** is an interactive web app for exploring high-resolution Hubble Space Telescope images.
The images are fetched from the official Hubble website and processed into `.dzi` format for efficient web rendering.

Using **OpenSeadragon**, the app provides smooth zooming, panning, and an immersive viewing experience even with massive images.
Users can place pinpoints to mark interesting regions, with all data stored in a lightweight **SQLite** database.

Explore the universe directly in your browser — no downloads needed.
Perfect for scientific research, education, or simply admiring the beauty of galaxies.


## 2025 NASA Space Apps Challenge

**Team:** [No Velvet Keep](https://www.spaceappschallenge.org/2025/find-a-team/no-velvet-keep/)

**Challenge:** [Embiggen Your Eyes!](https://www.spaceappschallenge.org/2025/challenges/embiggen-your-eyes/)

## Features

- Fetch and display original Hubble images optimized for fast web rendering.
- Freely explore galaxies with fluid zooming and panning powered by OpenSeadragon.
- Place and manage pinpoints to highlight areas of your interest.



## Tech Stack

**Frontend:** React TS, Openseadragon

**Backend:** Java, Sping Boot, SQLite

**Preprocessing:** Python, pyvips

**Model:** Python, torchvision, sklearn, hnswlib


## Run Locally

Clone the project

```bash
  git clone https://github.com/bergamontt/deep-sky.git
```

Run preprocessing script
```bash
    cd preprocessing
    python load_dzi_pictures.py
```

Start the Backend

```bash
  cd backend
  ./mvnw spring-boot:run
```

Start the Frontend

```bash
  cd frontend
  npm install
  npm run dev
```

