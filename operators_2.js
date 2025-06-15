let a = 45
let b = 5;
let e = "10"
let g = a + + e;
console.log("value of g",g); // Using unary plus to convert string to number
console.log("type of g", typeof g); // Output: 55
// This code demonstrates the use of various operators in JavaScript.
// Arithmetic Operators
console.log("a + b",a + b);
console.log("a - b",a - b);
console.log("a * b",a * b);
console.log("a / b",a / b);
console.log("a % b",a % b);
console.log("a ** b",a ** b);
console.log("a++",a++);
console.log("a",a);
console.log("++a",++a);
console.log("a",a);
console.log("a--",a--);
console.log("a",a);
console.log("--a",--a);

// Assignment Operators
let c =  52
c += 5; // c = c + 5
console.log("c += 5", c);
c -= 5; // c = c - 5
console.log("c -= 5", c);
c *= 5; // c = c * 5
console.log("c *= 5", c);
c /= 5; // c = c / 5
console.log("c /= 5", c);
c %= 5; // c = c % 5
console.log("c %= 5", c);
c **= 5; // c = c ** 5
console.log("c **= 5", c);
c <<= 2; // c = c << 2
console.log("c <<= 2", c);
c >>= 2; // c = c >> 2
console.log("c >>= 2", c);
c >>>= 2; // c = c >>> 2
console.log("c >>>= 2", c); 
c &= 2; // c = c & 2
console.log("c &= 2", c);
c |= 2; // c = c | 2
console.log("c |= 2", c);
c ^= 2; // c = c ^ 2
console.log("c ^= 2", c);

// Comparison Operators
let comp1 = 10;
let comp2 = 20;
let comp3 = "10";
console.log("comp1 == comp2", comp1 == comp2);
console.log("comp1 == comp3", comp1 == comp3); // loose equality check
console.log("comp1 === comp2", comp1 === comp2); // strict equality and type check
console.log("comp1 === comp3", comp1 === comp3); // strict equality and type check
console.log("comp1 != comp2", comp1 != comp2); // loose inequality check
console.log("comp1 != comp3", comp1 != comp3); // loose inequality check
console.log("comp1 !== comp2", comp1 !== comp2); // strict inequality and type check
console.log("comp1 !== comp3", comp1 !== comp3); // strict inequality and type check
console.log("comp1 > comp2", comp1 > comp2);
console.log("comp1 < comp2", comp1 < comp2);
console.log("comp1 >= comp2", comp1 >= comp2);
console.log("comp1 <= comp2", comp1 <= comp2);
console.log("comp1 >= comp3", comp1 >= comp3); // loose comparison
console.log("comp1 <= comp3", comp1 <= comp3); // loose comparison
console.log("comp1 >== comp3", comp1 > comp3); // strict comparison
console.log("comp1 <== comp3", comp1 < comp3); // strict comparison 


// Logical Operators
let log1 = true;
let log2 = false;
console.log("log1 && log2", log1 && log2); // Logical AND
console.log("log1 || log2", log1 || log2); // Logical OR
console.log("!log1", !log1); // Logical NOT
console.log("!log2", !log2); // Logical NOT 
// Bitwise Operators
let bit1 = 5; // 0101 in binary
let bit2 = 3; // 0011 in binary
console.log("bit1 & bit2", bit1 & bit2); // Bitwise AND
console.log("bit1 | bit2", bit1 | bit2); // Bitwise OR
console.log("bit1 ^ bit2", bit1 ^ bit2); // Bitwise XOR
console.log("~bit1", ~bit1); // Bitwise NOT
console.log("bit1 << 1", bit1 << 1); // Bitwise left shift
console.log("bit1 >> 1", bit1 >> 1); // Bitwise right shift
console.log("bit1 >>> 1", bit1 >>> 1); // Bitwise unsigned right shift  
// Ternary Operator
let ternary = (a > b) ? "a is greater than b" : "b is greater than or equal to a";
console.log("Ternary Operator Result:", ternary); // Output: a is greater than b
// Typeof Operator
console.log("Type of a:", typeof a);
console.log("Type of b:", typeof b);
console.log("Type of e:", typeof e);
console.log("Type of g:", typeof g);
// Instanceof Operator
let arr = [1, 2, 3];
console.log("arr instanceof Array:", arr instanceof Array); // Output: true
console.log("arr instanceof Object:", arr instanceof Object); // Output: true
console.log("arr instanceof String:", arr instanceof String); // Output: false
console.log("arr instanceof Number:", arr instanceof Number); // Output: false
// Delete Operator
let obj = { name: "John", age: 30 };
console.log("Before delete:", obj);
delete obj.age; // Deletes the 'age' property from the object
console.log("After delete:", obj);
// In Operator
console.log("'name' in obj:", 'name' in obj); // Output: true
console.log("'age' in obj:", 'age' in obj); // Output: false
console.log("'toString' in obj:", 'toString' in obj); // Output: true (inherited from Object prototype)
// Comma Operator
let x = (1, 2, 3); // Evaluates to the last value   
console.log("Value of x:", x); // Output: 3
// Void Operator
let voidResult = void 0; // Returns undefined
console.log("Void Result:", voidResult); // Output: undefined
// This code demonstrates the use of various operators in JavaScript, including arithmetic, assignment, comparison, logical, bitwise, ternary, typeof, instanceof, delete, in, comma, and void operators.
// It also shows how to use the unary plus operator to convert a string to a number.
// The code includes examples of each operator and their expected outputs, providing a comprehensive overview of JavaScript operators.  
// Unary Operators
let unaryNum = 10;
console.log("Unary plus:", +unaryNum); // Converts to number
console.log("Unary negation:", -unaryNum); // Negates the number
console.log("Unary increment:", ++unaryNum); // Increments the number
console.log("Unary decrement:", --unaryNum); // Decrements the number
console.log("Unary negation of string:", -e); // Negates the string (will convert to number first)
console.log("Unary plus of string:", +e); // Converts string to number
console.log("Unary negation of string with unary plus:", -e); // Negates the number after converting string to number
console.log("Unary plus of string with unary plus:", +e); // Converts string to number
// This code demonstrates the use of unary operators in JavaScript, including unary plus, negation, increment, and decrement.
// It shows how these operators can be applied to numbers and strings, converting strings to numbers when necessary.
// The code includes examples of each unary operator and their expected outputs, providing a clear understanding of their functionality.    
