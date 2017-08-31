//import fs from 'fs';
const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err,dir) => dir.filter( x => '.' + process.argv[3] === path.extname(x) ? console.log(x) : '')  );