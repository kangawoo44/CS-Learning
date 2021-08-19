// How to check against object keys? O(1)
let object_x = {
  name: 'woo',
  number: '4'
}
// method #1 just try to access it directly
let x_name = object_x.name
console.log(x_name)
x_name = object_x['name']
console.log(x_name)

// method #2: use 'in'
let hasKey = 'name' in object_x
console.log(hasKey)

// method #3: hasOwnProperty()
hasKey = object_x.hasOwnProperty('name')
console.log(hasKey)


// How to check against object values? O(n)
// Step 1. get array of object's values
let x_values = Object.values(object_x) //O(n)
console.log(x_values)
// Step 2. loop through the array of values
let hasValue = x_values.includes('woo') //O(n)
console.log(hasValue)