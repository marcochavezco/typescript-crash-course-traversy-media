"use strict";
// Basic types
let id = 5;
let firstName = 'Marco';
let isActive = true;
let x = 'Hello';
// Define types of array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'brad', false];
// Tuple array
let employee;
employee = [
    [1, 'Tom'],
    [2, 'Raul'],
    [3, 'Tomas'],
];
// Enum
// Can be numbers, enum has default value starting with 0, 1, 2, ..., . The starting number could be changed as follows
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// Strings too
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 10,
    name: 'Marco',
};
// Type assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Marco',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
