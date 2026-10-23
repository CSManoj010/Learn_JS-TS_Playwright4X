let n=10;
let a=0;
let b=1;

for(let i=0;i<n;i++){
    process.stdout.write(a+(i<n-1?" ":""));
    let c=a+b;
    a=b;
    b=c;
}