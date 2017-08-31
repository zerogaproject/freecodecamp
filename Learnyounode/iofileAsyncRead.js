//import fs from 'fs';
const fs = require('fs');
fs.readFile(process.argv[2], (err,file) => console.log(file.toString().split('\n').length -1) );