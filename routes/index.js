const router = require('express').Router();
const api = require('./api');
const path = require('path');
const express = require('express');
const app = express();

router.use('/api', api);


app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;