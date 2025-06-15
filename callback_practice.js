// callback asynchronous programming
function greet(name) {
    console.log(`Hello, ${name}!`);
}
function farewell(name) {
    console.log(`Goodbye, ${name}!`);
}
function processUser(name, callback) {
    console.log(`Processing user: ${name}`);
    // Simulate some processing time
    setTimeout(() => {
        console.log(`Finished processing user: ${name}`);
        callback(name); // Call the callback function after processing
    }, 2000);
}

// Usage    
processUser("Alice", greet);
processUser("Bob", farewell);
// This code demonstrates how to use callbacks in JavaScript to handle asynchronous operations.
// The `processUser` function simulates processing a user and then calls the provided callback function.
// The `greet` and `farewell` functions are passed as callbacks to demonstrate how they can be executed after the processing is complete.