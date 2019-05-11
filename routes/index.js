const router = require('express').Router();
const apiRoute = require('./api');
const path = require('path');
const express = require('express');
const app = express();

router.use('/api', apiRoute);


app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;