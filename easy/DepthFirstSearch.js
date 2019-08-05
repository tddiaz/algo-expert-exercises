/*
Depth-first Search

You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. 
Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach 
(specifically navigating the tree from left to right), stores all the of the Nodes' names in the input array, and returns it.
*/

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      array.push(this.name);
      for (const child of this.children) {
        child.depthFirstSearch(array);
      }
      return array;
    }
  }
  