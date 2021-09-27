/**
 * Binary Search
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
 * Otherwise, return -1.
 */

/**
 * PseudoCode
 * This function accepts a sorted array and a value.
 * Create a left pointer at the start of the array, and a right pointer at the end of the array.
 * While the left pointer comes before the right pointer:
 *  - Create a pointer in the middle
 *  - If you find the value you want, return the index
 *  - If the value is too small, move the left pointer up
 *  - If the value is too large, move theright pointer down
 * If you never find the value, return -1
 */

let binarySearch = (nums, target) => {
  //empty array
  if (!nums.length) return -1;
  
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left == right) {
      if (nums[left] === target) return left;
      else return -1;
    }
    let middle = Math.ceil((left + right) / 2) //rounded up
    if (nums[middle] === target) return middle;
    else if (nums[middle] > target) right = middle - 1;
    else if (nums[middle] < target) left = middle + 1;
  }
  return -1;
}

console.log([
  binarySearch([], 1), //-1
  binarySearch([1], 1), //0
  binarySearch([1,2], 1), //0
  binarySearch([1,2,3,4], 1), //0
  binarySearch([1,2,3,4,5], 2), //1
  binarySearch([1,2,3,4,5], 3), //2
  binarySearch([1,2,3,4,5], 4), //3
  binarySearch([1,2,3,4,5], 5), //4
  binarySearch([1,2,3,4,5], 6), //-1
  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10), //2
  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95), //16
  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100) //-1
])
