"use strict";
const http = require('http');
const express = require('express');
const path = require("path");
const bodyparser = require('body-parser')

const app = express();


app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req,res) => { res.send(req.body.str.split('').reverse().join('')) } ).listen(process.argv[2])
