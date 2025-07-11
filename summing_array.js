// Calculate the sum of numbers in an array of numbers
function sumArr(arr){
    let sum = 0;
    for(let ele of arr){
        sum += ele;
    }
    return sum;
};
arr1 = [1,-4,9,8,4]
console.log(sumArr(arr1));
