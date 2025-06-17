// Create a function that can only be called once.
// The first time it is called, it should execute the function and return its result.
// Any subsequent calls should return the result of the first call without executing the function again.


function once(fn) {
  // Your code here ...
  let called = false;
  let result
  return function (...args) {
    if (!called) {
      try {
        result = fn.apply(this, args);
        called = true;

      } catch (error) {
        throw error;
      }
    }
    return result;
  };
}

// Example usage
const addOnce = once((a, b) => a + b);
console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(4, 5)); // Output: 5 (does not change, as the function can only be called once)
console.log(addOnce(10, 20));
// Output: 5 (still does not change, as the function can only be called once)
// console.log(addOnce(10, 20)); // Output: 5 (still does not change, as the function can only be called once)
// console.log(addOnce(10, 20)); // Output: 5 (still does not change, as the function can only be called once)
// console.log(addOnce(10, 20)); // Output: 5 (still does not change, as the function can only be called once)