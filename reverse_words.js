function reverseWords(sentence) {
    // Your implementation
    
    let res = sentence.split(/(\s+)/);
    let result = res.map(item => {
        if (item.trim() === "") return item;
        return item.split('').reverse().join('');

    });
    return result.join('');
}

//For the purpose of user debugging.
let a = reverseWords("Hello World");

console.log("Reversed words in the sentence are:", a); // Output: "olleH dlroW"
console.log(reverseWords("JavaScript is fun")); // Output: "tpircSavaJ si nuf"
console.log(reverseWords("OpenAI GPT-3")); // Output: "IAnepO 3-TPG"
console.log(reverseWords("Reverse this sentence")); // Output: "esreveR siht ecnetnes"
console.log(reverseWords("SingleWord")); // Output: "drowelgniS"
console.log(reverseWords("  Leading and trailing spaces  ")); // Output: "  gnidaeL dna gniliart secaps  "