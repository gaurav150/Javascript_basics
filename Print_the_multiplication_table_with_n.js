function mulTable(num){
    for (let i = 1 ; i <= 10;i++){
        row = `${num} * ${i} = `+num * i
        console.log(row);
        
    }
};
// mulTable(2);

// printing from 1 to 10 table at a time
function tables(no){
    for (let i  = 1;i <= no;i++){
        mulTable(i);
        console.log("============");
        
    };
};

tables(10);