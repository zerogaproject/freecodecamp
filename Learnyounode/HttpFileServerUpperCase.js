const http = require('http');
const fs = require('fs');
const concat = require('concat-stream');
const thmap = require('through2-map');
 
var server = http.createServer( (req,res) =>{
    req.pipe(thmap( (chunk) =>{ chunk.toString() }).pipe(concat( data => { res.end(data.toString().toUpperCase())})));
});

server.listen(process.argv[2]);