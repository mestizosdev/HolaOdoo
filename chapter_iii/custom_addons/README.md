# Chapter III

Create my first module with Owl
## Create database user
```
CREATE ROLE odoo WITH LOGIN NOSUPERUSER CREATEDB NOCREATEROLE INHERIT NOREPLICATION CONNECTION LIMIT -1 PASSWORD 'o';
```
## Get Odoo source code
```
git clone https://github.com/odoo/odoo.git -b 17.0 --depth=1
```

## Create virtual environment
Get into odoo folder and create virtual environment
```
virtualenv -p python3.11 venv
```
```
source venv/bin/activate
```
```
pip install -U pip
pip install --upgrade wheel
pip install --upgrade setuptools
```
```
pip install -r requirements.txt
```
```
pip install -e ./
```
```
odoo --version
```
```
odoo -d odoo -r odoo -w o --without-demo=all --stop-after-init
```
```
odoo -c odoo.conf --save --stop
```
- Edit odoo.conf and update lines
```
addons_path = /your/project/addons/path,/add/your/custom/addons/path
db_name = odoo
db_password = o
db_user = odoo
```
## Create Module
Get into custom addons folder and run
```
odoo scaffold greet custom_addons
```
## Install Module
```
odoo -c odoo.conf -i greet
```
## Create folder to icon
```
mkdir -p ./static/description
```
## Install watchdog
```
pip install watchdog
```
## Run Odoo and install module
```
odoo -c odoo.conf -i greet --dev=all
```
