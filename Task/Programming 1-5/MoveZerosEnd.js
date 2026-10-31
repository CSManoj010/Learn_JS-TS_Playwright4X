let ar=[0,1,0,2,3];
let index=0;
for(let i=0;i<ar.length;i++){
    if(ar[i]!=0){
        let temp=ar[i];
        ar[i]=ar[index];
        ar[index]=temp;
        index++;
        
    }
}
console.log(ar.join(' '));