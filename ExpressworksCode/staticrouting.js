"use strict";
const http = require('http');
const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/home', (req,res) => {res.end('Hello World!')} ).listen(process.argv[2])