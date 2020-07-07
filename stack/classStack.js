class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    pop() {
        if (this.count === 0) {
            return null;
        }
        this.count--;
        
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    size() {
        return this.count;
    }
    peek() {
        return this.storage[this.count - 1];
    } 
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
