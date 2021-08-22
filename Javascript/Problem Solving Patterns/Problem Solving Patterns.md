What is an algorithm?
A process or set of steps to accomplish a certain task.

# Problem Solving Approaches
## 1. Understand the Problem
*Book recommendation: How to Solve It by George Polya*
- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
  - what are their types (ints, floats, string for large numbers)?
  - If a number is too large, javascript has an issue and will return "Infinity".
- What are the outputs that should come from the solution to the problem?
  - what are their types?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until yous et about solving the problem.)
- How should I label the important pieces of data that are a part of the problem?
## 2. Concrete Examples
Coming up with examples can help you understand the problem better.
Examples also provbide sanity checks that your eventual solution works how it should.
User Stories. Unit Tests.
### Explore Examples
- Start with simple examples
- Progress to more complex examples
  - What's the worst case scenario? write them down so you can refer to them.
- Explore examples with empty inputs
- Explore examples with invalid inputs

Example problem: write a function which takes in a string and returns counts of each character in the string.
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}
start asking questions and see if we need to worry about other variations such as:
- Do we want to have all the alphabet letters in there?
- What about white spaces? special characters? numbers? capitalization?
- If someone passes nothing/invalid? null? empty string?
## 3. Break It Down
- Explicitly write out the steps you need to take. This helps you catch any lingering conceptual issues or misunderstandings before you dive in.
- Example:
  - make object to return at end
  - loop over string, for each character...
    - if the char is a number/letter AND is a key in object, add one to count
    - if the char is a number/letter AND not in object, add it to object and set value to 1
    - if character is something else (space, period, etc.) don't do anything
  - return object at end

- Even if you don't finish the problem, these types of outline can make a difference in how competent you are perceived to be.
## 4. Solve or Simplify
- Solve the problem but if you can't, solve a simpler problem!
- Don't just do nothing being stuck at a problem.
## 5. Look Back and Refactor
- can you check the result?
- can you derive the result differently?
- can you understand it at a glance?
- can you use the result or method for some other problem?
- can you improve the performance of your solution?
- can you think of other ways to refactor?
- how have other people solved this problem?

# Problem Solving Patterns
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many more!

## Frequency Counters
- Any time you have multiple pieces of data to compare, in particular if you need to see if they contain the same individual pieces in the same frequency.
- This pattern uses objects or sets to collect values/frequencies of values
- Typically O(n)
- This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

## Multiple Pointers
- Creating pointers or values that correspond to an index or position and move towards the beginning, end  or middle based on certain condition.
- Very efficient for solving problems with minimal space complexity as well.

## Sliding Window
- This pattern involves creating a window which can either be an array or number from one position to another.
- Depending on a certain condition, the window either increases or closes (and a new window is created).
- Very useful for keeping track of a subset of data in an array/string etc.