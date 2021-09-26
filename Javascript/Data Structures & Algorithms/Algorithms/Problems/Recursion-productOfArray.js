/**
 * productOfArray
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

let productOfArray = (numArray) => {
  //corner case
  if (numArray.length === 0) return 0;

  let productRecursion = (pos) => {
    //changing input
    pos = pos + 1;
    //base case
    if (pos === numArray.length) return 1;
    return numArray[pos] * productRecursion(pos)
  }

  return productRecursion(-1)
}

console.log([
  productOfArray([]), // 0
  productOfArray([1]), // 1
  productOfArray([2,1]), // 2
  productOfArray([1,2,3]), // 6
  productOfArray([1,2,3,10]) // 60
])