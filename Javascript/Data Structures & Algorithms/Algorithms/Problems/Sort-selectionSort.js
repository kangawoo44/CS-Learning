/**
 * Selection Sort
 * 
 * for every item, look through the whole array to find the smallest item's index in the array.
 * Swap the smallest item at the current position, going from 0 to the end of the array to build up from the smallest.
 */

let selectionSort = (nums) => { //O(n^2). Same as bubble sort, but minimizes swaps. So if writing to memory is a concern this could be better.
  for (let i = 0; i < nums.length-1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    if (min !== i) swap(nums, i, min);
  }
  console.log(nums);
  return nums;
}

function swap(array, pos1, pos2) {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
}

selectionSort([5,3,6,9,4,1,2])
selectionSort([0])
selectionSort([4,1])