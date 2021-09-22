let chars = ['a', 'c', 'F', 'b', 'k', 'd'];
let nums = [5, 9, 1, 4, 2, 6, 8, 10, 3];

/**
 * sort() method sorts the elements of an array 'in place' and returns the sorted array.
 * The default sort order is ascending, built upon converting the elements into strings, 
 * then comparing their sequence of UTF-16 code units values.
 * If compareFunction(a, b) returns a value > than 0, sort b before a.
 * If compareFunction(a, b) returns a value < than 0, sort a before b.
 * If compareFunction(a, b) returns 0, a and b are considered equal.
 */
chars.sort((a, b) => {
  //ascending order: -1, 0, 1
  //returning -1 will put a before b.
  if (a < b) return -1
  if (a > b) return 1
  return 0
})

nums.sort((a,b) => a - b) //same ascending sort as above.

console.log(chars)
console.log(nums)