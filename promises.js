// promises for async operations
let promise = new Promise((resolve, reject)=>{

    console.log("Promise is created");
    setTimeout(() => {
        // let success = false; // Simulate failure
        let success = true; // Simulate success
        if(success) {
            resolve("Promise resolved successfully!");
        }
        else {
            reject("Promise rejected!");
        }
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    console.log("Second promise is created");
    setTimeout(() => {
        let success = false; // Simulate failure
        // let success = true; // Simulate success
        if(success) {
            resolve("Second promise resolved successfully!");
        }
        else {
            reject("Second promise rejected!");
        }
    }, 2000);

// Usage
promise.then((result)=> {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Promise operation completed.");
});

promise2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Second promise operation completed.");
});

// Chaining promises    
promise.then((result) => {
    console.log(result);
    return promise2; // Return the second promise
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error("Error in promise chain:", error);
}).finally(() => {
    console.log("All promises in chain completed.");
});

// Promise.all example  
Promise.all([promise, promise2]).then((results) => {
    console.log("All promises resolved successfully:", results);
}).catch((error) => {
    console.error("Error in Promise.all:", error);
}).finally(() => {
    console.log("Promise.all operation completed.");
}
).catch((error) => {
    console.error("Error in Promise.all:", error);
}).finally(() => {
    console.log("Promise.all operation completed.");
});

