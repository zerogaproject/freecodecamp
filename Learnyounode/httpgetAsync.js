const http = require('http');
const async = require("async");


// last parameter is the func call when everything is done
async.map(process.argv.slice(2), 
 (url, callback) =>{ http.get(url, (response) => {
    var text = ""
    response.setEncoding('utf8') 
    response.on('data', (chunk) =>{ text += chunk; })
    response.on('end', () =>{callback(null, text);});
    response.on('error', console.error) 
  })
}
, (err, results) => { (err) ?  console.log(err) : results.forEach( (result) => { console.log(result); } ) });