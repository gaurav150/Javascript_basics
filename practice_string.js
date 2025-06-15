console.log("har\"".length);// Output: 4

// includes() method
console.log("har\"".includes("har"));

// startsWith() method
console.log("har\"".startsWith("har")); // Output: true

// endsWith() method
console.log("har\"".endsWith("har")); // Output: false

let str2 = "Please give Rs 1000 ";
console.log(str2.slice("Please give Rs ".length)); // Output: "Please give Rs 1000"
let friend = "Harry";
friend[3] = "p"; // This will not change the string as strings are immutable in JavaScript
console.log(friend); // Output: "Harry"
