let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3   

//find()	Return the first element matching a condition	[10, 20, 30].find(n => n > 15) → 20
// findIndex()	Return the index of the first matching element	[10, 20, 30].findIndex(n => n > 15) → 1
// filter()	Return all elements matching a condition	[10, 20, 30].filter(n => n > 15) → [20, 30]
// some()	Check whether at least one element matches	[10, 20, 30].some(n => n > 25) → true
// every()	Check whether every element matches	[10, 20, 30].every(n => n > 5) → true