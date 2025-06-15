for (let i = 1;i < 7; i++){
    console.log("Iteration number: " + i);
    if (i === 3) {
        console.log("Skipping the iteration when i is 3");
        // console.log("Breaking the loop at i = " + i);
        // break; // This will exit the loop when i is 3
        continue; // This will skip the current iteration when i is 3
    };
};

const obj = {    name: "John",
    age: 30,
    city: "New York"
};
// This for-in loop iterates over the properties of the object and logs each key-value pair.
for (let key in obj) {
    console.log("Key: " + key + ", Value: " + obj[key]);
    if (key === "age") {
        console.log("Found age, skipping to next iteration");
        continue; // Skip the rest of the loop when age is found
    };
};
// This for-of loop iterates over the keys of the object and logs each key-value pair.
// Note: for-of is not typically used with objects, but here it demonstrates skipping logic.
for (let key of obj) {
    console.log("Key: " + key + ", Value: " + obj[key]);
    if (key === "age") {
        console.log("Found age, skipping to next iteration");
        continue; // Skip the rest of the loop when age is found
    }
}

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index " + i + ": " + fruits[i]);
    if (fruits[i] === "Cherry") {
        console.log("Found Cherry, skipping to next iteration");
        continue; // Skip the rest of the loop when Cherry is found
    }
    console.log("This is not Cherry, continuing with the loop");
};
/* This forEach loop iterates over the fruits array and 
logs each fruit along with its index. and it is method of array */
//  use of forEach
fruits.forEach((fruit, index) => {
    console.log("Fruit at index " + index + ": " + fruit);
    if (fruit === "Cherry") {
        console.log("Found Cherry, skipping to next iteration");
        return; // This will skip the rest of the current iteration in forEach
    }
    console.log("This is not Cherry, continuing with the loop");
});

