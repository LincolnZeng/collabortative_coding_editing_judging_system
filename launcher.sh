(docker-machine env default 2>&1 || docker-machine start default) && eval $(docker-machine env default)

fuser -k 3000/tcp
fuser -k 5000/tcp

brew services start redis

cd ./CEJ-client
npm install
ng build --watch &
cd ../CEJ-server
npm install
nodemon server.js &
cd ../executor
pip install -r requirements.txt
eval "$(docker-machine env default)"
python executor_server.py

echo "==================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESS." PRESSKEY

fuser -k 3000/tcp
fuser -k 5000/tcp

brew services stop redis