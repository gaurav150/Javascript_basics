function groupBy(arr, key) {
    // Your implementation
    const result = {};
    for (let item of arr) {
        const keyValue = item[key];
        if (!result.hasOwnProperty(keyValue)) {
            result[keyValue] = [];
        }
        result[keyValue].push(item);
    }
    return result;
}

let res = groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');

console.log(res);
// Output: 
// {
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   '30': [ { name: 'Bob', age: 30 } ]
// }
