/**
 * Quick Sort
 * 
 * O(n log n) time
 * 
 * choose a pivot and compare against all other items while keeping track of how many items are less than the pivot.
 * if there's an item that's larger than the pivot, right next to the pivot, then swap with the item that's less than the pivot once it's found.
 * after going through the whole array, move the pivot into the array for exactly how many items are less than the pivot.
 * that leaves pivot in the correct position with left of it being less than it and right of it being greater than it.
 * repeat this process on the left side then the right side. The overall process looks like converting the array into a binary tree.
 * 
 * it can be helpful to write the pivot helper function first which is responsible for arranging elements
 * in an array on either side of a pivot. It designates an element as the pivot and it rearragnes the elements to the left and right of the pivot.
 * the order of elements on either side of the pivot doesn't matter.
 */

// First Version
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

quickSort([8,3,5,2,6,9,10,1])
quickSort([100,-3,2,4,6,9,1,2,5,3,23])