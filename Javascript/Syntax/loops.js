// for...of - loop over iterable objects, can access each item immediately compared to a traditional for loop
let str = 'abc'
for (const char of str) {
  console.log('char', char)
}

let array1 = ['a', 'b', 'c']
for (const element of array1) {
  console.log('element', element)
}

// Map is iterable unlike objects, for hashmaps
let map1 = new Map()
map1.set('name', 'woo')
map1.set('num', 4)
// map entries
for (const [key, value] of map1) {
  console.log('map entries', key, value)
}
// map keys
for (const key of map1.keys()) {
  console.log('map keys', key)
}

// objects are not iterable, use for..in - to iterate over all enemuerable properties of an object
let object1 = {name: 'woo', num: 4}
for (const key in object1) {
  console.log('object properties', key, object1[key])
}

// forEach loops are just for arrays
array1.forEach(element => console.log(element))