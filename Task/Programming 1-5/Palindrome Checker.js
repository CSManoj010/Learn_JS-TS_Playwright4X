let str="madam";
let rev="";

for(let i=str.length-1;i>=0;i--){
    rev=rev+str.charAt(i);
}

if(rev===str){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}