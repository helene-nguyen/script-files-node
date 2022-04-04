#export your file into a new PATH
export PATH=$PATH:/home/user/node/bin

#!/bin/bash

#create new directory project
mkdir project
cd project
touch index.js
touch .gitignore
touch .htmlhintrc

#add folders
mkdir app
mkdir public

#in app directory
cd app 
mkdir middlewares
mkdir data
mkdir views

#in middlewares directory
cd middlewares
touch router.js
touch controller.js

#in views directory
cd ..
cd views
mkdir partials
mkdir pages

#in pages
cd pages
touch home.ejs
touch error.ejs

#in partials directory
cd ..
cd partials
touch header.ejs
touch footer.ejs
touch nav.ejs

#in public directory
cd ..
cd ..
cd ..
cd public
mkdir css
mkdir script
mkdir images

#in css directory
cd css
touch reset.css
touch base.css

#in script directory
cd ..
cd script
touch app.js
touch functions.js

cd ..
cd ..
npm init -y
npm install express ejs body-parser

#open VSCode with our files
code .