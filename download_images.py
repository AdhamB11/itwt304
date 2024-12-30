import os
import requests
from urllib.parse import urlparse

def download_image(url, save_path):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        with open(save_path, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    file.write(chunk)
        print(f"Successfully downloaded: {save_path}")
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")

def main():
    # Create images directory if it doesn't exist
    images_dir = "images"
    if not os.path.exists(images_dir):
        os.makedirs(images_dir)

    # Category images
    category_images = {
        "refrigerator.jpg": "https://images.samsung.com/is/image/samsung/p6pim/levant/rf50a5202s9/gallery/levant-twin-cooling-plus-rf50a5202s9-thumb-406852793?imwidth=720",
        "washing-machine.jpg": "https://www.lg.com/eg_ar/images/washing-machines/md07540744/gallery/D-1.jpg",
        "ac.jpg": "https://www.carrier.com/residential/en/us/products/ductless-systems/40maqb/~/media/residential/images/products/ductless/40maqb/40maqb_ductless_ac_heat_pump.jpg",
        "oven.jpg": "https://media.bosch-home.com/images/MCIM03121465_BO_Ovens_HBG675BS2_def.webp"
    }

    # Product images
    product_images = {
        "product1.jpg": "https://images.samsung.com/is/image/samsung/p6pim/levant/rf50a5202s9/gallery/levant-twin-cooling-plus-rf50a5202s9-thumb-406852793?imwidth=720",
        "product2.jpg": "https://www.lg.com/eg_ar/images/washing-machines/md07540744/gallery/D-1.jpg",
        "product3.jpg": "https://www.carrier.com/residential/en/us/products/ductless-systems/40maqb/~/media/residential/images/products/ductless/40maqb/40maqb_ductless_ac_heat_pump.jpg",
        "product4.jpg": "https://media.bosch-home.com/images/MCIM03121465_BO_Ovens_HBG675BS2_def.webp",
        "product5.jpg": "https://www.panasonic.com/content/dam/pim/me/en/NN/NN-ST34/NN-ST34HM/ast-1317316.png.pub.png",
        "product6.jpg": "https://www.kenwoodworld.com/WebImage/Global/Product%20images/Blenders/Hand%20blenders/HDP406WH/HandBlender-HDP406WH-800x600-1.jpg",
        "product7.jpg": "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/368187-01.png",
        "product8.jpg": "https://www.whirlpool.com/content/dam/global-assets/images/products/dishwashers/whirlpool-dishwasher-WDF540PADM.jpg"
    }

    # Download all images
    for filename, url in {**category_images, **product_images}.items():
        save_path = os.path.join(images_dir, filename)
        download_image(url, save_path)

if __name__ == "__main__":
    main()
