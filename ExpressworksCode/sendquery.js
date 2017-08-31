"use strict";
const http = require('http');
const express = require('express');
const path = require("path");
const bodyparser = require('body-parser')

const app = express();

app.get('/search',(req,res)=>{
    
    res.send(req.query)
})

app.listen(process.argv[2])
