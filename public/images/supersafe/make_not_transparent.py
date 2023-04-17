from PIL import Image

fname_in = "lkygbpc.png"
'''
img = Image.open(fname_in)
img = img.convert("RGBA")
data = img.getdata()

old_bgs = []
for item in data:
  if item not in old_bgs:
    old_bgs.append(item)
  # end if
# end for

fname_in = "safe_logo.png"
'''
fname_out = "lkygbpc_black.png"

img = Image.open(fname_in)
img = img.convert("RGBA")
data = img.getdata()

transparent = (255,255,255,0)
black = (0,0,0,255)
newData = []
for item in data:
  if item[3] == 0:
    newData.append(black)
  else:
    newData.append(item)
  # end if/else
# end for

img.putdata(newData)
img.save(fname_out, "PNG")
