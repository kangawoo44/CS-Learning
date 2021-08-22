/**
 * Given a sorted array of integers, write a functino called serach, 
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 * 
 * search([1,2,3,4,5,6],4) // 3
 * search([1,2,3,4,5,6],6) // 5
 * search([1,2,3,4,5,6],11) // -1
 * 
 * has to be sorted, use binary search O(log n)
 */

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if(currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1,2,3,4,5,6],4)) // 3
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1