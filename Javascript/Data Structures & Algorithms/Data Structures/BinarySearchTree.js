class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  //left child node is smaller than parent, right child node is greater than parent
  constructor() {
    this.root = null;
  }

  insert(value) {
    //value is assigned to a new Node's value
    const newNode = new Node(value);
    //case 1: tree is empty, meaning root is null
    //new node is assigned as root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //case 2: root exists
    //iterate starting with the root,
    //compare with every node in the path,
    //looking at the current node's left pointer if the new node's value is smaller
    //look at the right pointer if new value is greater
    //when the current node is null, the new node can be placed there
    //the previous parent node is pointing to the new node instead of null
    let curNode = this.root;
    while (value !== curNode.value) {
      //O(log n)
      if (value < curNode.value) {
        if (!curNode.left) curNode.left = newNode;
        curNode = curNode.left;
      } else {
        if (!curNode.right) curNode.right = newNode;
        curNode = curNode.right;
      }
    }
  }
  remove(value) {}
  find(value) {}
}

// class BinarySearchTree {
//   constructor(){
//       this.root = null;
//   }
//   insert(value){
//       var newNode = new Node(value);
//       if(this.root === null){
//           this.root = newNode;
//           return this;
//       }
//       var current = this.root;
//       while(true){
//           if(value === current.value) return undefined;
//           if(value < current.value){
//               if(current.left === null){
//                   current.left = newNode;
//                   return this;
//               }
//               current = current.left;
//           } else {
//               if(current.right === null){
//                   current.right = newNode;
//                   return this;
//               }
//               current = current.right;
//           }
//       }
//   }
//   find(value){
//       if(this.root === null) return false;
//       var current = this.root,
//           found = false;
//       while(current && !found){
//           if(value < current.value){
//               current = current.left;
//           } else if(value > current.value){
//               current = current.right;
//           } else {
//               found = true;
//           }
//       }
//       if(!found) return undefined;
//       return current;
//   }
//   contains(value){
//       if(this.root === null) return false;
//       var current = this.root,
//           found = false;
//       while(current && !found){
//           if(value < current.value){
//               current = current.left;
//           } else if(value > current.value){
//               current = current.right;
//           } else {
//               return true;
//           }
//       }
//       return false;
//   }
// }

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
printTree(tree.root);
//      10
//   5     13
// 2  7  11  16

function printTree(rootNode) {
  const array = [];
  array.push[rootNode.value];
  console.log(rootNode.value);
  if(rootNode.left !== null) printTree(rootNode.left);
  if(rootNode.right !== null) printTree(rootNode.right);
}
