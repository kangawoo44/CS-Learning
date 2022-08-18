/**
 * graphs can be directed/undirected, weighted/unweighted, cyclic/acyclic
 * graphs can be represented in 3 ways: edge list, adjacent list, adjacent matrix
 */

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[`${node}`] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    //undirected Graph
    for (const [node, list] of Object.entries(this.adjacentList)) {
      if (node === node1) list.push(node2);
      if (node === node2) list.push(node1);
    }
  }
  showConnections() {
    for (const [node, list] of Object.entries(this.adjacentList)) {
      console.log(`${node} --> ${list.join(' ').split(',')}`);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
