// // task 1
// function calcRectangleArea(width, height) {
//   if (typeof width !== 'number' || typeof height !== 'number') {
//     throw new Error("not numbers")
//   }
//   return width * height;
// }
// try {
//   console.log(calcRectangleArea(7, 13));
//   console.log(calcRectangleArea("7", 13));
// } catch (error) {
//   console.error("error occured", error.message);
// }
// console.log("running");

// task 2
function checkAge () {
  try {
    const age = prompt("How old are you?:");
    if (!age) {
      throw new Error("The foeld is empty. Pleaase enter your age");
    }
    if (isNaN(age)) {
      throw new Error("Invalid, please provede a numeric value");
    }
    const numericAge = Number(age);
    if (numericAge < 14) {
      throw new Error("Denied!");
    }
    alert("Acces granted!");
  } catch (error) {
    alert(`Error: ${error.name}\nDescription: ${error.message}`);
  }
}

checkAge();
