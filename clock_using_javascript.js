let a  = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
let month = a.getMonth() + 1; // Months are zero-based in JavaScript
let year = a.getFullYear();

console.log("Current Date: " + d + "/" + month + "/" + year);
console.log("Current Time: " + h + ":" + m + ":" + s);
