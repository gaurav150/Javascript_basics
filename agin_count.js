let s = "My          Name   is GAuRav!@$"

function counting(y){
let count = {}
for(let ele of s){
    if(ele in count ){
        count[ele] += 1
    }else{
        count[ele] = 1
    }
}
return count
}

console.log(counting(s));

