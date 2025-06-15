// ----------------------------
// 📥 Age Input via Readline
// ----------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", function(ageInput) {
  const age = Number.parseInt(ageInput); // Convert string to number

  console.log("Type of age is", typeof age);

  if (isNaN(age)) {
    console.log("❌ Invalid input. Please enter a valid number.");
  } else if (age < 0) {
    console.log("Invalid age");
  } else if (age < 18) {
    console.log("You are a minor");
  } else if (age < 60) {
    console.log("You are an adult");
  } else {
    console.log("You are a senior citizen");
  }

  // Close readline before running other parts of the code
  rl.close();

  // ----------------------------
  // 📆 Switch Case for Weekdays
  // ----------------------------
  let day = 3; // Example: 1 = Monday ... 7 = Sunday

  console.log("\n📆 Day of the Week:");
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break; // ✅ break added to prevent fall-through
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number");
  }

  // ----------------------------
  // 👤 Switch Case for Age Category
  // ----------------------------
  console.log("\n👤 Age Category Switch:");
  switch (age) {
    case 0:
      console.log("You are a newborn");
      break;
    case 18:
      console.log("You are an adult");
      break;
    case 40:
      console.log("You are a middle-aged person");
      break;
    case 60:
      console.log("You are a senior citizen");
      break;
    case 90:
      console.log("You are a centenarian");
      break;
    default:
      console.log("Age not specifically recognized in switch");
  };
});
// Ternary Operator Example
let yourAge =  19;
status_comment = (yourAge < 18) ? "You are a minor" : (yourAge < 60) ? "You are an adult" : "You are a senior citizen";
console.log("\n👤 Ternary Operator Status Comment:", status_comment);



