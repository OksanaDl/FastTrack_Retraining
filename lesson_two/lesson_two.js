// task 1
let x = 1;
let y = 2;

let res1= String(x) + String(y)
console.log(res1);
console.log( typeof res1);

let res2 = Boolean(x) + String(y) // Add code is required use variables x and y
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = Boolean(x) == Boolean(y)// Add code is required use variables x and y
console.log(res3); // true
console.log( typeof res3); // " boolean "

let res4 = String(x) == String(y)// Add code is required use variables x and y
console.log(parseInt(res4)); // NaN
console.log( typeof res4); // "number"

// task 2
// const userInput = prompt("Enter a number please:", ""); // Get input from the user
// const number = Number(userInput); // Convert the input to a number

// if (isNaN(number)) {
//   console.log("Invalid input. Please enter a valid number.");
// } else {
//   const isEvenAndPositive = number > 0 && number % 2 === 0; // Check if the number is even and positive
//   const isMultipleOfSeven = number % 7 === 0; // Check if the number is a multiple of 7

//   console.log(`The number ${number} is even and positive: ${isEvenAndPositive}`);
//   console.log(`The number ${number} is a multiple of 7: ${isMultipleOfSeven}`);
// }

// task 3
const emptyArr = [];
emptyArr[0] = 27; //Write any number in the first element of the array;
console.log(emptyArr);

emptyArr[1] = "Some text";//Write any line in the second element of the array;
console.log(emptyArr);

emptyArr[2] = true; //Write any logical value in the third element of the array;
console.log(emptyArr);

emptyArr[2] = null; //Write null
console.log(emptyArr);

const arr = [1, 3, 4, 5, "test"]
console.log(`Number ${arr.length} `);//Enter the number of elements stored in the array on the screen

emptyArr.shift([0]);
console.log(emptyArr);

// const userInput = prompt("Enter a number please:", ""); 
// emptyArr[4] = userInput; 
// console.log(emptyArr[4]);

// task 4
let cities = [" Rome ", " Lviv ", " Warsaw "]; // Initial array
let ribbon = cities.join("*"); // Combine elements with '*' separator
console.log(ribbon); // Display the result

// task 5
const age = prompt("How old are you?");
const isAdult = Number(age) >= 18; 

if (isNaN(age) || age === "") {
  console.log("Please enter a valid number.");
} else if (isAdult) {
  console.log("You have reached the age of majority.");
} else {
  console.log("You are still too young.");
}
