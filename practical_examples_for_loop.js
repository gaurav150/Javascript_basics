// Example of a for loop in JavaScript
// This code calculates the sum of numbers from 1 to 100 using a for loop.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i; // Add the current number to the sum
}
console.log("Sum of numbers from 1 to 100 is:", sum); // Output the total sum
// sum of odd numbers from 1 to 100
let oddSum = 0;
for (let  i = 0; i <= 100; i++) {
    if (i % 2 !== 0) { // Check if the number is odd
        oddSum += i; // Add the odd number to the sum
    }
}
console.log("Sum of odd numbers from 1 to 100 is:", oddSum);
// finding prime numbers from 1 to 100
let primeNumbers = [];
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; // If divisible, it's not prime
            break; // Exit the inner loop
        }
    }
    if (isPrime) {
        primeNumbers.push(num); // Add prime number to the array
    }
}
console.log("Prime numbers from 1 to 100 are:", primeNumbers);

// factorial of a number using for loop
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i; // Multiply the current number to the factorial
}
console.log("Factorial of", number, "is:", factorial); // Output the factorial result

// Fibonacci series using for loop  
let n = 10; // Number of terms in the Fibonacci series
let fib = [0, 1]; // Initialize the first two terms
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // Calculate the next term
}
console.log("Fibonacci series up to", n, "terms is:", fib); // Output the Fibonacci series

// while loop example
let count = 0;
while (count < 5) {
    console.log("Count is:", count);
    count++; // Increment the count
}
// do-while loop example
let index = 0;
do {
    console.log("Index is:", index);
    index++; // Increment the index
}while (index < 5); // Continue until index is less than 5
// Nested for loop example
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("Outer loop iteration:", i, "Inner loop iteration:", j);
    };
};
// Looping through an array using for loop
let colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
    console.log("Color at index", i, "is:", colors[i]); // Output each color
};

