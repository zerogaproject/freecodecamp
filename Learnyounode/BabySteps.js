"use strict";
process.argv.splice(0,2);
console.log(process.argv.reduce((total, num) => total + Number(num), 0 ));