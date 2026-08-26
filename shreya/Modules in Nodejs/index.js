const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// app.js
const math = require('./math');
console.log(math.add(5, 3));

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
