"use strict";

const express = require('express');
const logger = require('morgan');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger('dev'));

app.use('/', function(req, res){
    res.send('My first Express program!');
});

app.listen(PORT);
console.log('Server is runnig on port : ' + PORT);

