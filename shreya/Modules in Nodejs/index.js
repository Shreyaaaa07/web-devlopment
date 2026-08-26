function add (a, b){
    let c = a + b
    return c 
}

const WeirdFunction = ()=>
    return "I am weird"

module.exports = {add, weirdFunction}

// app.js
const math = require('./math');
console.log(math.add(5, 3));

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
