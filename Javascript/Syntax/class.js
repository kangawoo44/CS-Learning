/**
 * Prior to ES6, JavaScript had no concepts of classes. To mimic a class, 
 * you often use the constructor/prototype pattern as the following:
 */

//constructor function with name property
function Person(name) {
  this.name = name;
}
console.log(Person.prototype);

//getName() function is assigned to the prototype so that it can be shared by all instances of the Person type.
Person.prototype.getName = function () {
  return this.name;
};
console.log(Person.prototype);

//create a new instance of the Person type using the new operator.
//The john object is an instance of the Person and Object through prototypal inheritance.
var john = new Person ("John Doe");
console.log(john.getName(), typeof john);
console.log(john instanceof Person);
console.log(john instanceof Object);

////////////////////////////////////////////////////////////

/**
 * ES6 class declaration
 * In the Person class, the constructor() is where you can initialize the properties of an instance.
 * JavaScript automatically calls the constructor() method when you instantiate an object of the class.
 */

class Person2 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

let john2 = new Person2("John Doe");
let name2 = john2.getName();
console.log(name2);

////////////////////////////////////////////////////////////

/**
 * Despite the similarities between a class and a custom type defined via a constructor function,
 * there are some important differences.
 * 
 * 1. class declarations are not hoisted like function declarations.
 * let john = new Person("John Doe");
 * this line would encounter a ReferenceError. "Person is not defined"
 * 
 * 2. all the code inside a class automatically executes in the strict mode. This behavior cannot be changed.
 * 
 * 3. class methods are non-enumerable. If you use a constructor/prototype pattern, you have to use the
 * Object.defineProperty() method to make a property non-enumerable.
 * 
 * 4. calling the class constructor without the new operator will result in an error.
 * let john = Person("John Doe"); "Class constructor Person cannot be invoked without 'new'"
 * 
 * Summary:
 * A class declaration is syntactic sugar over prototypal inheritance with additional enhancements.
 */