function fact(num){
    prod = 1;
    for(let i = 1;i <=num;i++){
        prod *= i;
    }
    return prod;
}

console.log(fact(4));
