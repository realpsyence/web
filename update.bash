#!/bin/bash 
git pull
cd ./wttb_middleman_test && middleman build
cp -R /home/logan/web/wttb_middleman_test/build/* /var/www/wordtothebaker.com/public_html/ 

