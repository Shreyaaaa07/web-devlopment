// math.js
function add(a, b){
    return a + b;
}
module.exports = {add};

// app.js
const math = required('./math');
console.log(math.add(2, 3));

// math.mjs
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3));