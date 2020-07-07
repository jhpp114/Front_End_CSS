// Stacks
// functions: push pop peek length
// pallidrome

let letters = [];
let word = "racecar";
let rword = "";

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
console.log(letters.length);
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}
console.log(rword);
if (word === rword) {
    console.log("true");
    return true;
} else {
    console.log("false");
    return false;
}
