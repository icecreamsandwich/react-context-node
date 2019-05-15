#kill the node port used by the server
kill -9 $(lsof -t -i:3000)
kill -9 $(lsof -t -i:3002)

#start the react app
nohup npm start >> app.log 2>&1 &
#start the server
cd backend ; nohup npm start >> app.log 2>&1 &
