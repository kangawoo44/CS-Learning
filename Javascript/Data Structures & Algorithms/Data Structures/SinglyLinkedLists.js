/**
 * 
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//head
var first = new Node('Hi')

first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you?")


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  print() {
    let p = this.head;
    while (p) {
      console.log(p.val);
      p = p.next;
    }
  }
  static printFrom(pointer) {
    let p = pointer;
    while (p) {
      console.log(p.val);
      p = p.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push('hello')
// console.log(list)
list.push('my name is')
// console.log(list)
list.push('woo')
// console.log(list)

list.print()
let a = list.head.next;
SinglyLinkedList.printFrom(a)
