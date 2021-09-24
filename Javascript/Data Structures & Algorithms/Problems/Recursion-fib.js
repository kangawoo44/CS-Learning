/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the
 * Fibonacci sequence. Recall that the fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
 * which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

let fib = (num) => {
  //corner case
  if (num <= 0) return null;
  //base case
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log([
  fib(4), // 3 : fib(3) + fib(2) >> fib(2) + fib(1) + 1 >> 1 + 1 + 1
  fib(10), // 55
  fib(28), // 317811
  fib(35) // 9227465
])