// there are three functions in this file

// 1. Function to calculate the area of a rectangle 
function calculateRectangleArea(length, width) {
    return length * width; // Returns the area of the rectangle
};
// 2. Function to calculate the area of a circle
function calculateCircleArea(radius) {
    const pi = Math.PI; // Using Math.PI for a more accurate value of π
    return pi * radius * radius; // Returns the area of the circle
};
// 3. Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height; // Returns the area of the triangle
};

// Example usage of the functions
const rectangleArea = calculateRectangleArea(5, 10);
const circleArea = calculateCircleArea(7);
const triangleArea = calculateTriangleArea(4, 8);
console.log("Area of Rectangle:", rectangleArea); // Output: Area of Rectangle: 50
console.log("Area of Circle:", circleArea); // Output: Area of Circle: 153.93804002589985
console.log("Area of Triangle:", triangleArea); // Output: Area of Triangle: 16
