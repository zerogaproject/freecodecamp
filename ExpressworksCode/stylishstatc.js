"use strict";
const http = require('http');
const express = require('express');
const path = require("path");
const bodyparser = require('body-parser')

const app = express();


app.use(bodyparser.urlencoded({extended: false}))
app.use(require('stylus').middleware(process.argv[3] || __dirname + '/public'));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])
