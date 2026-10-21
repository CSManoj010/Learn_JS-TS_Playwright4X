let num=3;

let isprime=true;

if(num<=1){
    isprime= false;
}
else{
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            isprime= false;
            break;
        }
    }
}   

if(isprime==true){
    console.log("YES")
}
else{
    console.log("NO")
}

