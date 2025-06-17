function isAnagram(str1, str2) {
    const format = str =>
        str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return format(str1) ===format(str2);
};

//For the purpose of user debugging.
let res = isAnagram("listen", "silent");
console.log("Are the two strings anagrams?", res); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
console.log(isAnagram("evil", "vile")); // Output: true
console.log(isAnagram("triangle", "integral")); // Output: true
console.log(isAnagram("apple", "pale")); // Output: false