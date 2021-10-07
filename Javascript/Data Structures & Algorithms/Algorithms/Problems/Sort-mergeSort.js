/**
 * Merge Sort
 * 
 * O(n log n)
 * exploits the fact that arrays of 0 or 1 element are always sorted.
 * it works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
 * split by half until each element is an array. Then start merging them.
 * 
 * it's useful to first implement a helper function responsible for merging two sorted arrays.
 * O(n+m) both space and time, return a new array and don't mutate the inputs.
 */

// Merges two already sorted arrays
function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}



mergeSort([4,2,7,5,8,1,0])