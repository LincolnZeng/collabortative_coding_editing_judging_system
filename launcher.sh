fuser -k 3000/tcp

brew services start redis

cd ./CEJ-client
npm install
ng build --watch &
cd ../CEJ-server
npm install
nodemon server.js

echo "============================================"
read -p "PRESS [ENTER] TO TERMINATE PROCESS." PRESSKEY

fuser -k 3000/tcp
brew services stop redis