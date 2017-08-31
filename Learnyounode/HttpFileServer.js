const http = require('http');
const fs = require('fs');
const concat = require('concat-stream');

var server = http.createServer( (req,res) =>{
    fs.createReadStream(process.argv[3]).pipe(concat( data => { res.end(data.toString())}));
});

server.listen(process.argv[2]);