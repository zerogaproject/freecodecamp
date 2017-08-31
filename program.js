"use strict";
const http = require('http');
const express = require('express');
const path = require("path");
const bodyparser = require('body-parser')
const fs = require("fs")

const app = express();

app.get('/books',(req,res)=>{
    fs.readFile(process.argv[3], (err,file) => res.send(JSON.parse(file)))
})

app.listen(process.argv[2])

