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
  find(value) {
    //return true if found, false if not
    //does root exist? does value exist?
    //is value equal, less than, or greater than the current node's value?
    if (!this.root || !value) return false;

    let isLeft = false;
    let parent = this.root;
    let curNode = this.root;

    while (curNode) {
      if (value === curNode.value) {
        if (parent.value === curNode.value) console.log(`${value} was found on the root node.`);
        else console.log(`${value} was found on the ${isLeft ? "left" : "right"} node of parent: ${parent.value}`);
        return {
            parent: parent,
            curNode: curNode,
            isLeft: isLeft
        };
      }
      parent = curNode;
      if (value < curNode.value) {
        curNode = curNode.left;
        isLeft = true;
      }
      else {
        curNode = curNode.right;
        isLeft = false;
      }
    }

    console.log(`${value} was not found.`);
    return {
        parent: null,
        curNode: null,
        isLeft: isLeft
    };
  }
  remove(value) {
    //find the value node, replace it with its successor or just remove it
    //if it's a leaf node, just reassign the parent's pointer to null
    //if there's any child node, find the successor and assign it to the parent's pointer
        //this would mean always looking at the right side of the value node
        //then looking as far left as possible, make that the new node the successor
        //if there's no right child but there's a left child, left child is the successor

    const {parent, curNode, isLeft} = this.find(value);
    //value not found
    if (!parent && !curNode) return null;

    //value is root
    if (parent === curNode) {
        this.root = null;
    }
    //value node found is a leaf node
    else if (!curNode.left && !curNode.right) {
        if (isLeft) parent.left = null;
        else parent.right = null;
    }
    //value node found has a right child
    else if (curNode.right) {
        let successor = curNode.right;
        let successorParent = null;
        //that right child may have nodes smaller than it
        while (successor.left) {
            successorParent = successor;
            successor = successor.left;
        }
        if (successorParent) successorParent.left = null;
        if (isLeft) parent.left = successor;
        else parent.right = successor;
        successor.left = curNode.left;
    }
    //value node found has only left child
    else {
        if (isLeft) parent.left = curNode.left;
        else parent.right = curNode.left;
    }
    //return the value node that's being removed
    console.log("removing", curNode);
    return curNode;
  }
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
console.log(tree.find(10));
console.log(tree.find(5));
console.log(tree.find(12));
tree.remove(5);
console.log(tree.find(7));
// printTree(tree.root);
//      10
//   5     13
// 2  7  11  16

// function printTree(rootNode) {
//   const array = [];
//   array.push[rootNode.value];
//   console.log(rootNode.value);
//   if (rootNode.left) printTree(rootNode.left);
//   if (rootNode.right) printTree(rootNode.right);
// }
