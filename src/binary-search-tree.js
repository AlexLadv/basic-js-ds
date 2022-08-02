const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
    this.left = null;
    this.right = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.tree;
  }

  add( data ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.tree = addWithin(this.tree, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has( data ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // let current = this.tree;
    // while (current) {
    //   if (current.data === data) {
    //     return true;
    //   } else if (data < current.data) {
    //     current = current.left;
    //   } else {
    //     current = current.right;
    //   }
    // }
    // return false;
    return searchWithin(this.tree, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find( data ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.tree;
    while (current) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove( data ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    removeNode(this.tree, data);
    function minN(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
    function removeNode(node, data) {
      if (node === null) return null;
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let temporaryN = minN(node.right);
        node.data = temporaryN.data;
        node.right = removeNode(node.right, temporaryN.data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        node.left = removeNode(node.left, data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.tree) {
      return;
    }
    let node = this.tree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let max = this.tree;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};