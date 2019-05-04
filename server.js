// Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const http = require('http')
const io = require('socket.io');
const routes = require('./routes');
const server = http.Server(app);
const chat = io(server);
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets
if (process.env.NODE === 'production') {
    app.use(express.static('client/build')); 
}
// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Config
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb:127.0.0.1/mentormap';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Socket.IO conection
chat.on('connection', function(socket){
    console.log('user connected with id: ', chatid)
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

//  Routes
app.use(routes);

// Start the server
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});