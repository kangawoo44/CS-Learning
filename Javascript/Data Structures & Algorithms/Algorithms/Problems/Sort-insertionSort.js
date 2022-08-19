/**
 * Insertion Sort
 * 
 * insert each item into one sorted side, building up the sorted list.
 */

let insertionSort = (arr) => { //O(n^2), but if the array is nearly sorted, this sort performs well.
  console.log("o", arr)
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
      console.log("1", arr)
    }
    arr[j+1] = currentVal;
    console.log("2", arr)
  }
  console.log("f", arr);
  return arr;
}

insertionSort([2,1,9,7,6,4])