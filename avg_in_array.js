function avg_array(arr){
    let n = arr.length;
    let sum = 0;
    for (let ele of arr){
        sum += ele
    }
    let avg = sum / n;
    console.log("Avg of array",avg);
    
}

avg_array([1,3,5,7])