let results = ["pass", "fail", "pass", "error", "fail"];

console.log(results.indexOf("fail")); //1   indexof( )
console.log(results.indexOf("skip"));  // -1

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail"));  // lastIndexOf( )

// includes — returns boolean
console.log(results.includes("error")); // true  includes


// Method	Purpose	Example
// indexOf()	Find the first matching index	results.indexOf("pass") → 0
// lastIndexOf()	Find the last matching index	results.lastIndexOf("pass") → 2
// includes()	Check whether a value exists	results.includes("error") → true