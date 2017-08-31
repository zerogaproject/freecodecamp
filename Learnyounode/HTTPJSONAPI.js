"use strict";
const http = require('http');
const url = require('url')

const server = http.createServer( (req,res) =>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    req.url.toString().search('parsetime') > -1 ? 
    res.end( JSON.stringify( { "hour": new Date(url.parse(req.url,true).query.iso).getHours(), "minute": new Date(url.parse(req.url,true).query.iso).getMinutes(), "second": new Date(url.parse(req.url,true).query.iso).getSeconds()}))
    : res.end( JSON.stringify({"unixtime":new Date(url.parse(req.url,true).query.iso).getTime()}))

});

server.listen(process.argv[2]);