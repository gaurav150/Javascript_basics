function formLargestNumber(arr) {
  //write your implementation here
  let nums = arr.map(num => num.toString());
  nums.sort((a, b) => {
    return (b + a).localeCompare(a + b);
  });
  if (nums[0] === '0') {
    return '0';
  }
  return nums.join('');
}
const input = [3, 30, 34, 5, 9];
console.log("largest possible number possible using given array is",formLargestNumber(input));
// Output: "9534330"

// Test cases
console.log(formLargestNumber([10, 2])); // Output: "210"
console.log(formLargestNumber([3, 30, 34, 5, 9])); // Output: "9534330"
console.log(formLargestNumber([1])); // Output: "1"
console.log(formLargestNumber([10])); // Output: "10"
console.log(formLargestNumber([0, 0])); // Output: "0"
console.log(formLargestNumber([0, 1, 2])); // Output: "210"
console.log(formLargestNumber([12, 121])); // Output: "12121"
console.log(formLargestNumber([121, 12])); // Output: "12121"