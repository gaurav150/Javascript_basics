// Calculate the sum of odd numbers greater than 10 and less than 30

function sum_odd_range(num1,num2){
    let sum = 0;
    for (let i = num1; i <= num2 ;i++){
        if ( i % 2 !==0){
            sum += i;
        
        }
        
        
    }
    console.log(sum);
    
    // return sum;
};
sum_odd_range(4,10);
