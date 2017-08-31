const fs = require('fs');
const path = require('path');

module.exports = ( pathfile , ext , callback ) => fs.readdir(pathfile, (err , dir) =>{ 
    let arr = [];
    if (err) return callback(err); 
    dir.filter( x => '.' + ext === path.extname(x) ? arr.push(x) : '')
    callback(null, arr )
});