class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add (data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const serarchTree = function(node) {
                // data < node.data then left
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return serarchTree(node.left);
                    }
                }
                // data > node.data then right
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return serarchTree(node.right);
                    }
                }
                // if equal not insert in this tree
                else {
                    return null;
                }
            };
            return serarchTree(node);
        }
    }
    // find min
    findMin() {
        let currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }
    // find max
    findMax() {
        let currentNode = this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }
    // find data
    find(data) {
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data) {
                return true; 
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left;
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // no child
                if (node.left == null && node.right == null) {
                    return null;
                }
                // only one child
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null) {
                    return node.left;
                }
                // two child
                let tempNode = node.right;
                // find min
                while (tempNode.left != null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                node.left = removeNode(node.left, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin()); // expect 1
console.log(bst.findMax()); // expect 7
bst.remove(7);
console.log(bst.findMax()); //expect 7
console.log(bst.find(4));   // expect false

