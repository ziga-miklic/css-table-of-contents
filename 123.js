const toc = require('./index');
const fs = require('fs');

const code = fs.readFileSync('./css/main.css').toString();

console.log(toc({
  code,
  isOnly: true,
}));
