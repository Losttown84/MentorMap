// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const http = require('http').Server(app)
const client = require('socket.io')(server);
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets
if (process.env.NODE === 'production') {
    app.use(express.static('client/build')); 
}
// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
mongoose.connect('mongodb:127.0.0.1/mentormap', (err, db))

// Socket.IO conection
client.on('connection', function(socket){

    socket.on('user joined', function(data){
       socket.join(data.username);    
    });
  
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  
    socket.on('send private', function(data){
        console.log('sending private', data);
        io.in(data.to).emit('pmessage',data);
    });
  
  });

// Send every request to the React app
// Define any API routes before this runs
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  
  app.listen(PORT, function () {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
});