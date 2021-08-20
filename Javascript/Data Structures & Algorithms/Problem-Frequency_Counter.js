/*
Write a function called "same", which accepts two arrays.
The function should return true if every value in the array has it's 
corresponding values squared in the second array.
The frquency of values must be the same.

example:
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false — must be same frequency, one 4 and two 1's
*/

function same (arr1, arr2) {
  // invalid input: null, undefined >> return false
  // empty arrays: false instead of true since it would bypass all the checks
  // input variation: negative values? >> [-2, 2, 3], [4, 4, 9] >> use Math.abs
  // input variation: float 2.3 >> 5.28999999, no worries on float or use toPrecision() ?
  // input type: array containing anything else like string?

  //make boolean variable
  //if two arrays' length are the same, return false
  //iterate through arr1 and store in a hashmap
  //iterate through arr2 and store in a hashmap
  //loop through each entry of arr1 hashmap to arr2 hasmap and check the squared value and frequency matcch
    //return false if any one entry doesn't have a match
  //return true if the loop ends with complete match
}