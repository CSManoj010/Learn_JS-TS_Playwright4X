// ============================================
// JavaScript valid Identifier Rules 
// ============================================

let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";


let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";

//invalid
// let 2fast = 1;      // SyntaxError: starts with a digit
// let user name = "x"; // SyntaxError: spaces not allowed
// let user-name = "x"; // parsed as user minus name, so it fails: name is not defined
// let total# = 5;     // SyntaxError: # is not allowed
// let class = "A";    // SyntaxError: class is a reserved keyword
// let for = 3;        // SyntaxError: for is a reserved keyword