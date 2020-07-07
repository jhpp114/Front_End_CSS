// Set
// works like array but not accepting duplicate data
let mySet = new Set();
mySet.add(1);   //  [1]
mySet.add(2);   //  [1, 2]
mySet.add(2);   //  [1, 2]

let o = {
    a: 1
,   b: 5
};

mySet.add(o);  //   [1 2 {a: 1, b: 5}]
console.log(mySet);
mySet.has(1);   // true
mySet.has(5);   // false
mySet.size;     // 3
console.log(mySet.size);
console.log(mySet.delete(10));  // false
console.log(mySet.delete(1));   // true
console.log(mySet.has(1));      // false

let cheker = {
    a: 1
,   b: 5
};

console.log(mySet.has(cheker)); // false

for (let item of mySet) {
    console.log(item);
}

for (let item of mySet.keys()) {
    console.log(item);
}

for (let item of mySet.values()) {
    console.log(item);
}

let myArr = Array.from(mySet);
console.log(myArr);
