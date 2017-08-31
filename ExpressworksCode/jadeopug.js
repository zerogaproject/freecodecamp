"use strict";
const http = require('http');
const express = require('express');
const path = require("path");
const app = express();


app.set('view engine', 'jade')
app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/home', (req,res) => { res.render('index', {date: new Date().toDateString()}) } ).listen(process.argv[2])