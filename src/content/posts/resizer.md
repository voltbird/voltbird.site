---
title: RESIZER v1.5.0
author: Sanjay S
pubDatetime: 2026-11-2T20:55:00.000+05:30
slug: resizer-v-one-five
featured: true
draft: false
tags:
  - Blog
  - Projects
  - RESIZER
description:
  A Post about RESIZER v1.5.0. and the story behind it.
timezone: "Asia/Kolkata"
---

<img src="/images/RESIZER v1.png" align = "center"><p align ="center"><b>RESIZER v1.0</b></p>

After JEE, while registering for JOSAA and CSAB, I ran into a problem. There were multiple documents to be uploaded, but these were too big in file size and I had to shrink them one by one which was time-consuming. RESIZER was the product of this experience. Now this tool could help me resize multiple images effortlessly and could help you too.

The repository can be found [here.](https://github.com/voltbird/RESIZER)

This program is also the first milestone in my python learning journey. Coding it was definitely a good exercise and I enjoyed it. If you want me to add more features or find any bugs/issues in the program you can [email me](mailto:sanjays@tuta.io) about it. 

The executable is quite small (~20 MB) so that it is portable and can be quickly downloaded. But I still want to decrease its file size, so suggestions are welcome. A nocolor version is also [there.](https://github.com/voltbird/RESIZER/tree/nocolour) in case you want to run the python file but don’t want to download all the extra modules and just want to get the work done.

The following is the README of the repository to help you use this tool.<br>

# RESIZER
A program that Resizes multiple image files (.jpg, .jpeg, .png, .gif) at once. **[DOWNLOAD THE LATEST VERSION (v1.5.0)](https://github.com/wassupmahboi/RESIZER/releases)**

# USAGE:
- Click the [green “Code” button](https://github.com/voltbird/RESIZER/archive/refs/heads/main.zip) to download the zip file or the [.exe file](https://github.com/voltbird/RESIZER/releases).
- Run the program and follow the steps in it.
- **NOTE: THE FOLDER CAN HAVE FILES OTHER THAN IMAGES AND/OR SUBFOLDERS WITH IMAGE FILES. YOU CAN CHOOSE TO RESIZE THE IMAGES IN THE SUBFOLDER. IT WILL SKIP ALL OTHER NON-IMAGE FILES**

## USING PYTHON:
- Unzip the zip file. Inside you will find main.py and prompt.py
- Right click and select “Open in terminal”.
- Run `python main.py`
- If you are using the [main python code](https://github.com/voltbird/RESIZER/archive/refs/heads/main.zip), make sure you have the following libraries downloaded:
  1. os
  2. pathlib
  3. pillow **[This is usually the one which is not pre-installed with Python]**
- These are not really necessary, needed just to color the text and make it more readable:
  1. termcolor
  2. sys
  3. builtins
- If you don't really care about the color, run this [nocolor/main.py](https://github.com/voltbird/RESIZER/blob/nocolour/main.py).
- It saves the images wherever you want and by default in the RESIZED_PHOTOS folder, which is outside the folder the program is in.

## USING THE EXE:
- If you are downloading [RESIZER.exe](https://github.com/wassupmahboi/RESIZER/releases), just click and enjoy :)

<p align ="center"><img width="1920" height="927" alt="Output" src="/images/resizer_output.png" /><b>OUTPUT</b></p><br>

# What's New (v1.5.0)
- Using LANCZOS, BICUBIC to resize images.
- Better UI.
- Option to load and save images wherever you want.
-  It is now cross platform.


