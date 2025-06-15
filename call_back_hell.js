// call back hell example

function first(callback) {
    console.log("First function executed");
    setTimeout(() => {
        console.log("First function completed");
        callback();
    }, 1000);
}

function second(callback) {
    console.log("Second function executed");
    setTimeout(() => {
        console.log("Second function completed");
        callback();
    }, 1000);
}   
function third(callback) {
    console.log("Third function executed");
    setTimeout(() => {
        console.log("Third function completed");
        callback();
    }, 1000);
}
function fourth(callback) {
    console.log("Fourth function executed");
    setTimeout(() => {
        console.log("Fourth function completed");
        callback();
    }, 1000);
}
// Usage
first(() => {
    second(() => {
        third(() => {
            fourth(() => {
                console.log("All functions executed in sequence");
            });
        });
    });
});