// console.log("A");
// console.log("B");
// console.log("C");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");

console.log("Start");

setTimeout(() => {
  console.log("Waiting over");
}, 2000);

console.log("End");

