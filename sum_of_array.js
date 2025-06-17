function sum(...args) {
    // Your implementation
    return args.reduce((accumulator, num) => accumulator + num, 0);
};

//For the purpose of user debugging.
let res = sum(100, 200, 300, 400);
console.log("Sum of the array is:", res); // Output: 1000
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40, 50)); // Output: 150
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0
console.log(sum(0, 0, 0)); // Output: 0
console.log(sum(-1, -2, -3)); // Output: -6
console.log(sum(1.5, 2.5, 3.5)); // Output: 7.5
console.log(sum(1000, 2000, 3000, 4000, 5000)); // Output: 15000
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output: 55
console.log(sum(100, -50, 25)); // Output: 75   
console.log(sum(0.1, 0.2, 0.3)); // Output: 0.6
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Output: 45