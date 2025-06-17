function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((accumulator, num) => accumulator + num, 0);
    return expectedSum - actualSum;

}

//For the purpose of user debugging.
let a =findMissingNumber([3,0,1]);
console.log("Missing number in the array is:", a); // Output: 2
console.log(findMissingNumber([0, 1])); // Output: 2
console.log(findMissingNumber([1, 2, 3, 4, 5])); // Output: 0
console.log(findMissingNumber([0, 2, 3])); // Output: 1
console.log(findMissingNumber([0,1, 3, 4, 5])); // Output: 0
console.log(findMissingNumber([0, 1, 2, 3, 4])); // Output: 5
console.log(findMissingNumber([5, 4, 3, 2, 1])); // Output: 0