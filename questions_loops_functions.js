const { log } = require("console");

let marks =  {
    "harry":98,
    "rohan":70,
    "aakash":7
};
for (let b = 0;b < Object.keys(marks).length; b++){
    console.log("Keys are ",Object.keys(marks)[b]);
    console.log("Values are",marks[Object.keys(marks)[b]]); 

};

// printing the keys
for (let i  in marks){
    console.log("Keys are ",i);
    console.log("Values are",marks[i]);
};

// Q 3
// let cn = 4;
// let i ;
// while (i!= cn){
//     prompt("Enter the correct number");
// };
// console.log("You have entered the correct number");

// Q 4
const mean = (a, b,c,d) => {
    return (a + b +c + d) / 4;
}
const ma  = mean(4, 5, 6, 7);
console.log("Mean is", ma);