// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const client = require('socket.io');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('Client')); 
// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// const db = require('./config/keys').mongoURI;

mongo.connect('mongodb:127.0.0.1/mentormap', (err, db))

io.on('connection', function(socket){

    socket.on('user joined', function(data){
       socket.join(data.username);    
    });
  
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  
    socket.on('send private', function(data){
        console.log('sending private', data);
        io.in(data.to).emit('pmessage',data);
    })
  
  });