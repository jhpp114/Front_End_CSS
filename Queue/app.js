// Queue
class Queue {
    constructor() {
        this.collection = [];
    }
    enqueue(value) {
        this.collection.push(value);
    }
    dequeue() {
        return this.collection.shift();
    }
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.collection[0];
    }
    size() {
        return this.collection.length;
    }
    isEmpty() {
        return this.collection.length === 0;
    }
}

let myQueue = new Queue();
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
console.log(myQueue);
console.log(myQueue.isEmpty()); // should return false
console.log(myQueue.front());
console.log(myQueue.size());    // should return 3
console.log(myQueue.dequeue());
console.log(myQueue.front());   // should return b
console.log(myQueue.size());    // should return 2

