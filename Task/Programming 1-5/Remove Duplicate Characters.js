let str="racecar"
let res=""

for(let i=0;i<str.length;i++){
    let duplicate = false;
for(let j=0;j<res.length;j++){
    if(str[i]==res[j]){
        duplicate=true
        break;
    }
}
if(!duplicate){
    res=res+str[i];
}
}
console.log(res);