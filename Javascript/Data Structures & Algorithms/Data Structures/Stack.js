class Plate {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      console.log("Top value: ", this.top.value);
    }
    push(value){
      const newPlate = new Plate(value);
      if(this.isEmpty()) {
        this.bottom = newPlate;
        this.top = newPlate;
      } else {
        const temp = this.top;
        this.top = newPlate;
        this.top.next = temp;
      }
      this.length++;
      console.log(`Added a plate with the value: ${value}`);
      return this;
    }
    pop(){
      const value = this.top.value;
      if (this.length === 1) {
        this.bottom = this.bottom.next;
      }
      this.top = this.top.next;
      this.length--;
      console.log(`Removed a plate with the value: ${value}`);
      return this;
    }
    isEmpty(){
      return !this.length ? true : false;
    }
    print(){
      const printArray = [];
      let cur = this.top;
      while(cur) {
        printArray.push(cur.value);
        cur = cur.next;
      }
      console.log("Top to Bottom: ", printArray);
    }
  }
  
  const myStack = new Stack();
  myStack.push(2);
  myStack.push(4);
  myStack.push(11);
  myStack.print();
  myStack.pop();
  myStack.peek();
  myStack.push('Hotdog').push('Pizza').push('Burger');
  myStack.print();
  