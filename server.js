// Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const http = require('http')
const io = require('socket.io');
const routes = require('./routes/user.js');
const app = express();
const server = http.Server(app);
const chat = io(server);
const PORT = process.env.PORT || 3001;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Serve up static assets
if (process.env.NODE === 'production') {
    app.use(express.static('client/build')); 
}
// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Config
mongoose.Promise = Promise;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mentormap';
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