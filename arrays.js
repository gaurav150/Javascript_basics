let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log("Number:", num);
});

for (let i = 0; i < numbers.length; i++) {
    console.log("Number at index", i, "is", numbers[i]);
};

// map method
let squaredNumbers = numbers.map((num) => {
    return num * num}); // Square each number
console.log("Squared numbers:", squaredNumbers);

// filter method
let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0; // Filter even numbers
});
console.log("Even numbers:", evenNumbers);
// reduce method
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Sum all numbers
}, 0);
console.log("Sum of numbers:", sum);

let c = numbers.join(", "); // Join array elements into a string
console.log("Joined numbers:", c);

let d = numbers.toString(); // Convert array to string
console.log("String representation of numbers:", d);

// Array methods
let fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // Add an element to the end
console.log("After push:", fruits);

fruits.pop(); // Remove the last element
console.log("After pop:", fruits);
fruits.unshift("kiwi"); // Add an element to the beginning
console.log("After unshift:", fruits);
fruits.shift(); // Remove the first element
console.log("After shift:", fruits);
fruits.splice(1, 1, "orange"); // Remove 1 element at index 1 and add "orange"
console.log("After splice:", fruits);
fruits.slice(0, 2); // Get a sub-array from index 0 to 2 (exclusive)
console.log("After slice:", fruits.slice(0, 2)); // Output the sliced array
console.log("Fruits array:", fruits);