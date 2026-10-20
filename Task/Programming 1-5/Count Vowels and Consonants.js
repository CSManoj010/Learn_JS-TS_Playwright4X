let str="Hello world"
let vowels=0;
let consonants=0;
for(let i=0;i<str.length;i++){
    let ch=str[i].toLowerCase();
    if("aeious".includes(ch)){
        vowels++;
    }
    else if(ch>='a' && ch<='z'){
        consonants++;
    }
}
console.log(vowels);
console.log(consonants);