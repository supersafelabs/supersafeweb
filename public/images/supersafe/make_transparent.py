from PIL import Image

fname_in = "bg2.png"

img = Image.open(fname_in)
img = img.convert("RGBA")
data = img.getdata()

old_bgs = []
for item in data:
  if item not in old_bgs:
    old_bgs.append(item)
  # end if
# end for

fname_in = "logo.png"
fname_out = "logo_transparent.png"

img = Image.open(fname_in)
img = img.convert("RGBA")
data = img.getdata()

transparent = (255,255,255,0)
newData = []
for item in data:
  if item in old_bgs:
    newData.append(transparent)
  else:
    newData.append(item)
  # end if/else
# end for

img.putdata(newData)
img.save(fname_out, "PNG")
