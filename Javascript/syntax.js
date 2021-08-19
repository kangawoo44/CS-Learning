// How to check against object keys? O(1)
let object_x = {
  name: 'woo',
  number: '4'
}
//#1: use 'in'
let hasKey = 'name' in object_x
console.log(hasKey)
//#2: hasOwnProperty()
hasKey = object_x.hasOwnProperty('name')
console.log(hasKey)

// How to check against object values? O(n)
let x_values = Object.values(object_x)
console.log(x_values)
hasKey = x_values.includes('woo')
console.log(hasKey)