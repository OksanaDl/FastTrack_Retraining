// task 1
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error("not numbers")
  }
  return width * height;
}
try {
  console.log(calcRectangleArea(7, 13));
  console.log(calcRectangleArea("7", 13));
} catch (error) {
  console.error("error occured", error.message);
}
console.log("running");

//task 2
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

//task 3
class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}

function showMonthName(month) {
  const months = [  "June", "July", "August", "September", "October",
    "November", "December"];
    if (month , 1 || month > 12) {
      throw new MonthException("Incorrect month number");
    }
    return minths[month - 1];
}
try {
  console.log(showMonthName(7));
  console.log(showMonthName(13));

} catch (error) {
  if (error instanceof MonthException) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error("Unexpected error:", error);
  }
}

// task 4
function showUser(id) {
  if (id < 0) {
    throw new Error(`Id can not be negative: ${id}`);
  }
return { id };
}

function showUsers(ids) {
  const validUsers = [];
  ids.forEach((id) => {
    try {
      validUsers.push(showUser(id));
    } catch (error) {
      console.error(error.message);
    }
});

return validUsers;
}

const ids = [1, -5, 45, 56];
console.log(showUsers(ids));
