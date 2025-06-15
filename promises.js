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

// Usage
promise.then((result)=> {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Promise operation completed.");
});

