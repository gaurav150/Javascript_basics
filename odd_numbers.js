function odd(num){
    let even = []
    let odd = []
    for (let i = 0;i <= num;i++){
        
        if(i % 2 !== 0){
            odd.push(i)
        }else{
            even.push(i)
        }
        
        
        
    }
    console.log(even);
    console.log("odd",odd);
};

odd(8)