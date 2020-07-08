class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = null;
        this.right =null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    add (data) {
        const node = this.root;
        if (this.root == null) {
            this.root = new Node(data);
            return;
        } else {
            
            const searchTree = function(node) {
                if (node.data > data) {
                    if (node.left === null) {
                         node.left = new Node(data);
                         return;
                    } 
                    return searchTree(node.left);
                } else if (node.data < data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    }
                    return searchTree(node.right);
                } else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }
    findMax() {
        let node = this.root;
        while (node.right != null) {
            node = node.right;
        }
        return node.data;
    }
    findMin() {
        let node = this.root;
        while (node.left != null) {
            node = node.left;
        }
        return node.data;
    }
    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) {
                return null;
            }
            // node matches with data
            if (node.data == data) {
                // no child
                if (node.left == null && node.right == null) {
                    return null;
                } 
                // one child
                else if (node.left == null) {
                    return node.right;
                } else if (node.right == null) {
                    return node.left;
                } 
                // two children
                let minNode = node.right;
                while (nodeRight.left != null) {
                    minNode = minNode.left;
                }
                node.data = minNode.data;
                node.right = removeNode(node.right, minNode.data);
                return node;
        } else if (node.data > data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
        this.root = removeNode(this.root, data);
    }

    find(data) {
        let node = this.root;
        while (node) {
            if (data == node.data) {
                return true;
            } else if (node.data > data) {
                node = node.left;
            } else if (node.data < data) {
                node = node.right;
            }
        }
        return false;
    }

    maxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.maxHeight(node.left);
        let right = this.maxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    minHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.minHeight(node.left);
        let right = this.minHeight(node.right);
        if (left > right) {
            return right + 1;
        } else {
            return left + 1;
        }
    }

    isBalance() {
        return this.minHeight === this.maxHeight;
    }
    
    inorderTraversal() {
        if (this.root == null) {
            return null;
        }
        let result = [];
        function inorderTrasverse(node) {
            node.left && inorderTrasverse(node.left);
            result.push(node.data);
            node.right && inorderTrasverse(node.right);
        }
        inorderTrasverse(this.root);
        return result;
    }

    preorderTraversal() {
        if (this.root == null) {
            return null;
        }
        let result = [];
        function preorderTravse(node) {
            result.push(node.data);
            node.left && preorderTravse(node.left);
            node.right && preorderTravse(node.right);
        } 
        preorderTravse(this.root);
        return result;
    }
    postorderTraversal() {
        if (this.root == null) {
            return null;
        }
        let result = [];
        function postorderTraverse(node) {
            node.left && postorderTraverse(node.left);
            node.right && postorderTraverse(node.right);
            result.push(node.data);
        }
        postorderTraverse(this.root);
        return result;
    }

    levelorderTravseral() {
        let collection = [];
        let queue = [];
        if (this.root != null) {
            queue.push(this.root);
            while (queue.length > 0) {
                let node = queue.shift();
                collection.push(node.data);
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            return collection;
        } else {
            return null;
        }
        
    }
}
let bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
console.log(bst.find(7));
console.log(bst.findMax());
console.log(bst.findMin());

bst.remove(1);
console.log(bst.findMin());
console.log(bst.maxHeight());
console.log(bst.minHeight());
console.log(bst.isBalance());

console.log(bst.inorderTraversal());
console.log(bst.preorderTraversal());
console.log(bst.postorderTraversal());
console.log(bst.levelorderTravseral());
