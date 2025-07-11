let s = "My          Name   is GAuRav!@$"

function counting(y){
let count = {}
for(let ele of s){
    if(ele !== " " ){
        count[ele] = (count[ele]||0)+1
    }
}
return count
}
console.log(counting(s));




