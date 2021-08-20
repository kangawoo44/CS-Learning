//ES6 syntax to square a number
let x = 2
console.log(x**2)

//traditionally
console.log('power', Math.pow(x, 2))

x = 4
console.log('square root', Math.sqrt(x))

//decimal point precision
x = 2.3123123
console.log(x.toPrecision(3))

//returns a pseudo-random number between 0 and 1
console.log(Math.random())

//returning a random integer between two bounds. min(inclusive) max(inclusive)
//explanation: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log('random', random(100, 1000))

console.log(Math.abs(-2))

x = 5.5
console.log(Math.floor(x))
console.log(Math.ceil(x))
console.log(Math.round(x))

//use trunc for removing decimals, not floor. explanation: https://stackoverflow.com/questions/38702724/math-floor-vs-math-trunc-javascript
x = -5.52341345
console.log(Math.trunc(x))