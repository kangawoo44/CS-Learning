// how to check if a char is alpha numeric?
let char = 'x'
let isCharAlphaNumeric = /[A-z0-9]/.test(char)
//not sure how efficient regular expressions can be depending on the expression
console.log('isCharAlphaNumeric', isCharAlphaNumeric)