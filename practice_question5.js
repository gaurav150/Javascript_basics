let arr =  [1, 2, 3, 4, 5];
let a = prompt("Enter a number");// Prompt user for input for browser environment
a = parseInt(a);
arr.push(a);
console.log("Updated array:", arr);

let arr2 = [1, 2, 3, 4, 5,81];
let b ;
do {
    b = prompt("Enter a number to add in the array");// Prompt user for input for browser environment
    b = parseInt(b);
    arr2.push(b);
} while (b != 0);
console.log("Array after adding elements:", arr2);