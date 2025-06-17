function removeDuplicates(arr) {
  // your code here
  const seen = new Set();
  const result = [];
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
};
let res = removeDuplicates([1, 2, 2, 3, 4, 4]);
console.log(res); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([5, 5, 5, 5])); // Output: [5]
console.log(removeDuplicates([1, 2, 3])); // Output: [1, 2, 3]
console.log(removeDuplicates([])); // Output: []    
console.log(removeDuplicates([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([1, 1, 2, 2, 3, 3])); // Output: [1, 2, 3]
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]