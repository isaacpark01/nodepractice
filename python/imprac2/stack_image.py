import os 
from PIL import Image

print('\n start stacking images... ')

os.chdir('cropped')
images = os.listdir()

#loop through images and extract RGB channels as separate lists
red_data = []
green_data = []
blue_data = []

for image in images:
    with Image.open(image) as img:
        if image == images[0]:
            img_size = img.size 
        red_data.append(list(img.getdata(0)))
        green_data.append(list(img.getdata(1)))
        blue_data.appned(list(img.getdata(2)))

ave_red = [round(sum(x) / len(red_data)) for x in zip(*red_data) ]
ave_blue = [round(sum(x) / len(blue_data)) for x in zip(*blue_data)]
ave_green = [round(sum(x) / len(green_data)) for x in zip(*green_data)]


merged_data = [(x) for x in zip(ave_red, ave_green, ave_blue)]
stacked = Image.new('RGB', (img_size))
stacked.putdata(merged_data)
stacked.show()
os.chdir('..')
stacked.save('jupiter_stacked.tif', 'TIFF')
