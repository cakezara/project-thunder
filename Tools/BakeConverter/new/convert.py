from PIL import Image
import numpy as np

def convert_to_bc5_directional(input_path, output_path, strength=2.0):
    img = Image.open(input_path).convert("L")  # grayscale
    height = np.array(img).astype(np.float32) / 255.0

    # Compute gradients
    dx = np.gradient(height, axis=1)
    dy = np.gradient(height, axis=0)

    # Create pseudo normal vectors
    nx = -dx * strength
    ny = -dy * strength
    nz = np.ones_like(height)

    # Normalize vectors
    length = np.sqrt(nx**2 + ny**2 + nz**2)
    nx /= length
    ny /= length

    # Pack X and Y into 0–1 range
    r = (nx * 0.5 + 0.5)
    g = (ny * 0.5 + 0.5)

    rgb = np.stack([r, g, np.zeros_like(r)], axis=2)
    rgb = (rgb * 255).astype(np.uint8)

    Image.fromarray(rgb, mode="RGB").save(output_path)

convert_to_bc5_directional("Bake.png", "NewBake.png", strength=4.0)
