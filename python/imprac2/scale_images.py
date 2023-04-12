import os 
import sys 
import shutil 
from PIL import Image, ImageOps

def main():
    """Get starting folder, copy colder , run crop function, & clean folder"""

    frames_folder = 'video_frames'

    #prepare files and folders
    del_folders('cropped')
    shutil.copytree(frames_folder, 'cropper')

    #run cropping function 
    print("start cropping and scaling ... ")
    os.chdir('cropped')
    crop_images()
    clean_folder(prefix_to_save ='cropped')

    print("Done! \n")
    