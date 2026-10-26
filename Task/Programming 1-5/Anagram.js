let str1="silent"
let str2="listen"

let word1=str1.split("").sort().join("")
let word2=str2.split("").sort().join("")
if(word1===word2){
    console.log("Anagram")
}
else{
    console.log("Not Anagram")
}