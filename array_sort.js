function arr_sorting(arr){
    let arr2 = [...arr]
    for (let i=0;i < arr.length;i++){
        for (let j = 0; j < arr.length - i-1;j++){
            if (arr2[j] > arr2[j+1] ){
                let temp = arr2[j];
                arr2[j] = arr2[j+1]
                arr2[j+1] = temp


        }      
    }
    }
    return arr2

}

function descending_arr_sorting(arr){
    let arr2 = [...arr]
    for (let i=0;i < arr.length;i++ ){
        for(let j = 0;j < arr.length - i -1;j++){
            if(arr2[j] < arr2[j+1]){
                let temp = arr2[j];
                arr2[j] = arr2[j+1];
                arr2[j+1] = temp;
            }
        }
        
    }
    return arr2;
    
}
let arr = [4,2,1,3]
arr.sort( (a,b) => b -a)
console.log("Descending",arr);
arr.sort((a,b)=> a - b)
console.log("Ascending",arr);




// console.log(arr_sorting([4,2,1,3]))
// console.log(descending_arr_sorting([4,2,1,3]))


function largestNumber(arr){
    let num = arr[0];
    for (let i = 0 ;i < arr.length;i++){
        for (let j = 0; j < arr.length -i ; j++ ){
        let cur = arr[j]
        let next = arr[j + 1]
        if (cur > next){
            num = cur
        };
        };
        
    }
    return num;
}
// console.log("max number is",largestNumber([9,16,6,2]));

function maxElemntArray(arr){
    let max = arr[0]
    for (let i = 1; i < arr.length;i++){
        if (arr[i]> max){
            max = arr[i]
        }
    }
    return max
}

// console.log(maxElemntArray([16,7,67,23]));

function secondMaxElementArray(arr){
    let n = arr.length
    let arr2 = [...arr]
    arr2.sort((a,b) => a-b)
    // console.log(arr2);
    
    for (let i = n-2;i>=0;i--){
        if (arr2[i] !== arr2[n-1]){
            return arr2[i]
        }

    }
    return -1;
}
// console.log("Second Max",secondMaxElementArray([12,6,18,13]));
// console.log("Second Max is",secondMaxElementArray([12,12,13,12]));


function sorted_arr(arr){
    return arr === arr.sort((a,b)=> a-b)
}

let arr1 = sorted_arr([1,2,3,4])
// console.log(arr1);


// Remove duplicates from Sorted Array
function remove_duplicate(arr){
    let res = [];
    for (let i of arr){
        if (!res.includes(i)){
            res.push(i)
            
        }
    }
    console.log("Hello",res);
    
};
// remove_duplicate([1,1,2,3,3,3,4,5,5,5,5])


function generating_sub_array(arr){
    for (let i =0;i < arr.length;i++){
        for (let j = i;j < arr.length;j++){
            let subArray = []
            for (let k = i ;k <= j; k++){
                subArray.push(arr[k]);
            }
                console.log(subArray.join(" "));
                
        }
    }
};


// generating_sub_array([1,2,3,4,5,6])


function reversingArray(arr){
    let res = [];
    while(arr.length > 0){
        res.push(arr.pop())
    }
    return res;
}

// console.log(reversingArray([1,2,3,4,5]))

function secondReversingArray(arr){
    let res = []
    for (let i = arr.length-1 ; i >= 0;i--){
        res.push(arr[i])
    }
    return res
};
// console.log(secondReversingArray([1,2,3,4,5,6]));


