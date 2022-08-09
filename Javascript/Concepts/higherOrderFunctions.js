function greaterThan(n) { //higher order function
  return m => m > n; //returns a function
}
let greaterThan10 = greaterThan(10); //variable holds a function created with a higher order function
console.log(greaterThan10(11)); //true because 11 > 10