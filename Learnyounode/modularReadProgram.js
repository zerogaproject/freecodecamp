const mymodule = require('./modularReadIO');

mymodule(process.argv[2], process.argv[3], (err,data) => data.map(x => console.log(x)));
