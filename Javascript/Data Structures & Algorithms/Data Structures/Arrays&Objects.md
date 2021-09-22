## Performance of Arrays and Objects
### Objects
#### Big O of Objects:
- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

When you don't need any ordering, objects are an excellent choice.

#### Big O of Object Methods:
- Object.keys - O(n)
  - returns an array of all the keys
- Object.values - O(n)
  - returns an array of all the values
- Object.entries - O(n)
  - returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
- hasOwnProperty - O(1)
  - returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).


### Arrays
#### When to use arrays
- When you need order
- When you need fast access/insertion/removal(sort of)
- 
#### Big O of Arrays:
- Insertion - it depends...
- Removal - it depends...
- Searching - O(n)
- Access - O(1)

Inserting/Removing in the beginning of an array is O(n) because the indices need to be re-mapped.

Push/Pop (end of an array) is O(1).

#### Big O of Array Operations:
- push - O(1)
- pop - O(1)
- shift - O(n)
  - removes the first element from an array and returns that removed element.
- unshift - O(n)
  - adds one or more elements to the beginning of an array and returns the new length of the array.
- concat - O(n)
  - merges two arrays together. technically O(n+m)
- slice - O(n)
  - copy a portion of an array and returns the new array
- splice - O(n)
  - add new elements into an array at a certain index
- sort - O(n * log n)
  - Mozilla uses merge sort, Chrome's v8 source code uses QuickSort and InsertionSort for smaller arrays.
- forEach/map/filter/reduce/etc - O(n)