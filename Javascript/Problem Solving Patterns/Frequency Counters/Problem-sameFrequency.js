/**
 * Write a function called sameFrequency.
 * Given two positive integers find out if the two numbers have the same frequency of digits.
 * 
 * Your solution MUST have the following complexities:
 * Time: O(n)
 * 
 * Sample Input:
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578,5879385) // true
 * sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (!(num1.length === num2.length)) return false;
  let num1_map = {};
  for (const char of num1) {
    num1_map[char] = num1_map[char] ? num1_map[char] + 1 : 1;
  }
  for (const char of num2) {
    if (num1_map[char]) {
      num1_map[char] = num1_map[char] - 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578,5879385)) // true
console.log(sameFrequency(22,222)) // false