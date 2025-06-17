function flattenArray(arr) {
    // Your implementation
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

//For the purpose of user debugging.
let a  = flattenArray([1, [2, [3, 4], 5], 6]);
console.log("Flattened array is:", a); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, 3], 4])); // Output: [1, 2, 3, 4]
console.log(flattenArray([1, [2, [3, [4]]], 5])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, 4], [5]]));   // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([])); // Output: []
console.log(flattenArray([1, 2, 3])); // Output: [1, 2, 3]
console.log(flattenArray([1, [2], 3, [4, [5]]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([[[1]], [[2, 3]], 4])); // Output: [1, 2, 3, 4]
console.log(flattenArray([1, [2, [3, [4, [5, [6]]]]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[[[[1]]]], [[2, 3]], 4])); // Output: [1, 2, 3, 4]