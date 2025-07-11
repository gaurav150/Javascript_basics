function get_positive_num(arr){
    let arr2  = [];
    for(let ele of arr){
        if (ele > 0){
            arr2.push(ele)
        }
    }
    return arr2;
};

function f1_get_positive(arr) {
    return arr.filter( el  => el > 0)
    
}

// function f2_get_positive(arr){
//     arr.map()
// }
console.log(get_positive_num([-1,3,4,5,-6,-7]));
console.log(f1_get_positive([-2,-4,-6,9]));

