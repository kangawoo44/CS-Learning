/**
 * Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 * 
 * Constraints: don't use auxiliary space, don't mutate input
 * 
 * Example:
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 */

/** jsDoc
 * @param {array} arr 
 * @returns {number}
 */

const countUniqueValues = (arr) => { //O(n)
  /** 
   * Counter starts at 1 as long as array size is > 0.
   * With two pointers starting 1 index apart, 
   * move toward to end of the array while comparing to each other.
   * If the value at second index is the same as the value at first,
   * continue to move. If they're not the same,
   * increment the count by 1 then continue.
   * edge cases: invalid input, type
   */
  let count = 1;
  if (arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return count;
    let next = 1;
    arr.forEach(num => {
      if (arr[next] !== num) count++;
      if (next === arr.length - 1) return count;
      next++;
    })
  }
  return count;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

//if mutating the array is ok, another more efficient solution
//that does not require even the count variable would be to
//use the second pointer to scout for differences and changing the value of
//the array at the first index after incrementing it, in the end leaving
//only the unique values from index 0 to whereever the first index is.
//that would mean the count we return would be first index + 1.