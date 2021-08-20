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

const same = (arr1, arr2) => {
  // input variation: float 2.3 >> 5.28999999, no worries on float or use toPrecision() ?
  // input type: array containing anything else like string?

  let isSame = false;
  if (!(arr1 && arr1.length && arr2 && arr2.length && arr1.length == arr2.length)) return isSame;
  
  let arr1_map = getFrequencyMap(arr1);
  let arr2_map = getFrequencyMap(arr2);

  for (const [key, value] of arr1_map) {
    const key2_freq = arr2_map.get(key**2);
    if (!(key2_freq && value == key2_freq)) return isSame;
  }
  isSame = true;
  return isSame;
} //O(n) - both time and space

const getFrequencyMap = (array) => {
  let map = new Map();
  array.forEach(element => {
    //for negative numbers, count it the same as its positive number since this map will only be used to compare for frequency.
    //exmaple: [-2,2,4], [4,4,16] should be true, not false
    const element_abs = Math.abs(element);
    if (map.has(element_abs)) {
      map.set(element_abs, map.get(element_abs) + 1)
    } else {
      map.set(element_abs, 1)
    }
  })
  return map;
}

console.log(same([-2,2,3],[4,4,9])) //should be true
console.log(same([1,2,3],[4,1,9])) //should be true
console.log(same([1,2,3],[1,9])) //should be false (length)
console.log(same([1,2,1],[4,4,1])) //should be false (frequency)