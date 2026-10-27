let arr = [1,2,3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]
arr.splice(2,1);
console.log(arr);
// splice(2, 1) means:
// - 2 — Start at index 2 (the third element, 3).
// - 1 — Remove one element.

arr.splice(2, 0, 99);
// arr.splice(2, 1, 99);
// arr.splice(2, 2, 99);
console.log(arr);
// 2 — Start at index 2.
// 0 — Remove zero elements.
// 99 — Insert 99 at index 2.

// [ 1, 2, 99, 5, 6 ]
arr.splice(1, 2, 10, 20);
console.log(arr);

// Start: [1, 2, 3, 5, 6] index
// startIndex — Where to start.
// deleteCount — How many elements to remove.
// item1, item2, ... — Values to insert.


// After arr.splice(2, 1): [1, 2, 5, 6] 
// After arr.splice(2, 0, 99): [1, 2, 99, 5, 6]
// After arr.splice(1, 2, 10, 20): [1, 10, 20, 5, 6]