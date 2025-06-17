/*
Here is a function that counts the number of vowels in a given string.
You can test it with different strings to see how many vowels it contains.  
You can also modify the function to count only specific vowels if needed.

*/

function countVowels(str) {
    // Your implementation
    let vowels = ["a", "e", "i", "o", "u"]
    let words = str.toLowerCase();
    let count = 0;
    for (let item of words) {
        if (vowels.includes(item)) {
            count++;
        }
    }
    return count;
}

//For the purpose of user debugging.
console.log("number of  vowels present in the word is:",countVowels("JavaScript")); // Output: 3
console.log("number of  vowels present in the word is:",countVowels("Hello World")); // Output: 3
console.log("number of  vowels present in the word is:",countVowels("aeiou")); // Output: 5
console.log("number of  vowels present in the word is:",countVowels("xyz"));    // Output: 0
console.log("number of  vowels present in the word is:",countVowels("")); // Output: 0



