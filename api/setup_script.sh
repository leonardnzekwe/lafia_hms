#!/bin/bash
# API DATABASE set-up script

echo "----Starting Setup-----"
echo "------CHECK CONFIG-----"
python3 manage.py check
echo "-----------------------"
echo "----MAKE MIGRATIONS----"
python3 manage.py makemigrations
echo "-----------------------"
echo "-------MIGRATE---------"
python3 manage.py migrate
echo "-----------------------"
echo "----Setup Concluded-----"
