## What is recursion?
a process (typically a function) that calls itself.

### It's everywhere!
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- More often seen with complex data structures
- It's sometimes a cleaner alternative to iteration

### The Call Stack
- stack data structure
- any time a function is invoked it's placed on top of the stack (push)
- when JavaScript sees the return keyword or when the fuction ends, the compiler will remove (pop)
- when we write recursive functions, we keep pushing new functinos onto the call stack

## How recursive functions work
- Invoke the same function with a different input until you reach your base case!

### Base Case
The condition when the recursion ends. (This is the most important concept to understand)

### Examples
1. 
```
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
```

2. 
```
function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}
```

3. 
```
function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
}
```

### Common Recursion Pitfalls
- no base case
- forgetting to return the wrong thing
- stack overflow

## Helper Method Recursion example
```
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if(helperInput.length === 0) return;
    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);
```

### Pure Recursion example
```
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);
```

#### Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
- To make copies of objects use Object.assign, or the spread operator.