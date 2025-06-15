let runAgain = true;
const canDrive = (age) => {
        return age >= 18 ? true : false;
    }
while (runAgain) {
    let age = prompt("Enter your age:"); // Prompt user for input for browser environment
    age = parseInt(age);
    if (age < 0 ) {
        console.error("Invalid age entered. Age cannot be negative.");
        break; // Skip the rest of the loop if age is invalid
    }
    if (canDrive(age)) {
        alert("You can drive.");
    } else {
        alert("You cannot drive.");
    }
    runAgain = confirm("Do you want to check another age?"); // Prompt user for confirmation for browser environment
};

 
