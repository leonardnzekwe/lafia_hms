#!/bin/bash
# API Django Build script

echo "----Starting Build-----"
echo "..Install requirements.."
python3.9 -m pip install -r requirements.txt
echo "------CHECK CONFIG-----"
python3.9 manage.py check
echo "-----------------------"
echo "----MAKE MIGRATIONS----"
python3.9 manage.py makemigrations --noinput
echo "-----------------------"
echo "-------MIGRATE---------"
python3.9 manage.py migrate --noinput
echo "-----------------------"
echo "----COLLLECT STATIC----"
python3.9 manage.py collectstatic --noinput --clear
echo "----Build Concluded----"
