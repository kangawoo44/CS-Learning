let object1 = {
  a: 1,
  b: 4
}
let x = ['c', 'a']
for (const char of x) {
  //if object1[char] exists increment its value, if not, set it to 0
  //the below two are the same expression, and don't increment
  object1[char] = object1[char]++ || 0
  console.log(object1[char])
  object1[char] = object1[char] ? object1[char]++ : 0
  console.log(object1[char])
  //must do prefix increment so the incremented value is returned
  object1[char] = ++object1[char] || 0
  console.log(object1[char])
}
console.log(object1)