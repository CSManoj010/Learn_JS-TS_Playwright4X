/*

1. Types of comparison operators
==	Equal to (converts types if needed)	5 == "5"	true
===	Strictly equal (value and type)	5 === "5"	false
!=	Not equal	5 != 3	true
!==	Strictly not equal	5 !== "5"	true
>	Greater than	10 > 5	true
<	Less than	3 < 2	false
>=	Greater than or equal to	5 >= 5	true
<=	Less than or equal to	4 <= 6	true
*/

console.log(5 == "5"); // lose couple comparsion , value
console.log(5 === "5"); // stict not allowed - valeu + datatype both

// ! -> not char
console.log(5 != "5"); // value
console.log(5 !== "5"); // (with !, == actuall ===) !===

console.log(5 === 5);     // true
console.log(5 !== 5);     // false  
console.log(5 > 3);      // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 5);    // true