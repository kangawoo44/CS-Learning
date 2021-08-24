/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * 
 * Examples:
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areTehreDuplicates('a', 'b', 'c', 'a') // true
 * 
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 * 
 * Bonus:
 * Time - O(n log n)
 * Space - O(1)
 */

//frequency counter time O(n), space O(n)
// function areThereDuplicates(...arguments) {
//   // will all the arguments be of the same type? i.e. just number or just characters
//   // if it's a character, will 'A' be considered equal to 'a'?
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

//multiple pointers O(n log n)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => {//Depends on the engine. typically O(n log n)
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  console.log(args)
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

//another linear solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true