from PIL import Image
import os

src_path = "/Users/abhinavb/Downloads/website/Abhinav_Bathula_Resume_Website_2025/src/png/62bc7b13071dec17849af324.png"
dst_path = "/Users/abhinavb/Downloads/website/Abhinav_Bathula_Resume_Website_2025/src/png/oracle_cropped_text.png"

try:
    if not os.path.exists(src_path):
        print(f"Source not found: {src_path}")
        exit(1)

    img = Image.open(src_path)
    width, height = img.size
    print(f"Original size: {width}x{height}")
    
    # Crop bottom 70 pixels to capture ONLY text and exclude red bar
    crop_height = 70
    left = 0
    top = height - crop_height
    right = width
    bottom = height
    
    cropped = img.crop((left, top, right, bottom))
    cropped.save(dst_path)
    print(f"Saved cropped image to {dst_path}")
    
except Exception as e:
    print(f"Error: {e}")
