"use strict";
const http = require('http');
const express = require('express');
const path = require("path");
const bodyparser = require('body-parser')

const app = express();

app.put('/message/:id',(req,res)=>{
    res.send(require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'))
})

app.listen(process.argv[2])
