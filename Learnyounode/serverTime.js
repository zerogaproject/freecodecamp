const net = require('net');
const strftime = require('strftime');
var server = net.createServer((socket)=>{
    socket.write(strftime('%F %H:%M', new Date()));
    socket.end("\n");
});

server.listen(process.argv[2]);