/**
 * Power
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()
 * Do not worry about negative bases and exponents.
 */

let power = (base, exponent) => {
  //base case - 0th power
  if (exponent === 0) return 1
  //changing input - exponent
  return base * power(base, exponent - 1)
}
// 1 (top of call stack) * 2 (exponent is 1) * 2 (exponent is 2) * 2 (exponent is 3) * 2 (exponent is 4)

console.log(power(2,0)) //1
console.log(power(2,2)) //4
console.log(power(2,4)) //16