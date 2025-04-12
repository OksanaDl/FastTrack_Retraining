// task 1.1
let elements = [1, 2, 3, 4, 5];
let product = 1;// To find the product of the elements of an array = to multiply all the elements in the array together 

for(let i = 0; i < elements.length; i++) {
  product *= elements[i]; 
}
console.log("Product of lelements: ", product);

let arr = [1, 2, 3, 4, 5];
let productOf = 1;
let i = 0;

while(i < arr.length) {
  productOf *= arr[i];
  i++;
}
console.log("Product of lelements: ", productOf);

// task 2
for(let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even number`);
  } else {
    console.log(`${i} is odd number`);
}
}

// task 3
function randArray(k) {
  let randomArray = []; 

  for(let i = 0; i < k; i++) {
    let randomNum = Math.floor(Math.random() * 500) + 1;
    randomArray.push(randomNum);
  }
  return randomArray;
}

console.log("Task 3: ", randArray(5));

// task 4
function raiseToDegree(a, b) {
  if (Nunmber.isInteger(a) && Number.isInteger(b)) {
    return Math.pow(a, b);
  } else {
    return "Both inputs must be integer";
  }
}
// interface
let a = parseInt(prompt("Enter integer for 'a'"), 10);
let b = parseInt(prompt("Enter integer for 'b'"), 10);

let result = raiseToDegree(a, b);
console.log(result);

// Task 6
function findUnique (arr) {
  let uniqueSet = new Set(arr);
  return uniqueSet.size === arr.length;
}
console.log(findUnique([1, 2, 4, 1, 7, 4])); // false
console.log(findUnique([1, 2, 3, 5, 11])); // true

// task 7
function lastElem(arr, x = 1) {
  if (x === 1) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-x);
  }
}

console.log(lastElem([2, 7, 10, 5]));
console.log(lastElem([2, 7, 10, 5], 2));
console.log(lastElem([2, 7, 10, 5, 3, 4, 8, 11], 5));

// task 8
function capitalizeWords(str) {
  return str
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
}

let inputStr = 'fast track training';
let outputStr = capitalizeWords(inputStr);
console.log(outputStr);
