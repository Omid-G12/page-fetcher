const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);
//console.log('input', input);

const URL = input[0];
//console.log('URL', URL);

const path = input[1];
//console.log('path', path);


request(URL, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (err) {
      console.log('failed to write file to ' + path);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  });
});
