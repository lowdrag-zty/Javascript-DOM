// function checkScope() {
//   "use strict";
//   var i = "function";
//   if (true) {
//     var i = "block";
//     console.log(i);
//   }
//   console.log(i);
// }

// checkScope();

/*freeze()
// let cat = { name: "justin" };
// Object.freeze(cat);
*/

// let getName = function() {
//   return "Justin";
// };

/* higher order
real_number_array = [4, 5.6, 7.8, -8, 5];
const squre_list = array => {
  const result_array = array
    .filter(num => Number.isInteger(num) && num > 0)
    .map(element => element ** 2);
  return result_array;
};

console.log(squre_list(real_number_array));
*/

/*用reduce()和arrow的求和function
// const getSum = (...args) => {
//   return args.reduce((a, b) => a + b);
// };

// console.log(getSum(1, 2, 3, 4, 5));
*/

// a1 = [1, 2, 3];
// a2 = a1;
// a1[0] = 0;
// console.log(a2);

// num1 = 100;
// num2 = num1;
// num1 = 5;
// console.log(num2);

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);

// const arr1 = [1, 2, 3, 4, 5];
// const [, , ...arr2] = arr1;
// console.log(arr2);

/*only useful parameters need to be put in the function's brackets*/
// let dog = {
//   name: "Ron",
//   age: "18",
//   color: "black"
// };
// function half({ age }) {
//   return age / 2;
// }

// let half_age = half(dog);
// console.log(half_age);

// let getName = function(name) {
//   console.log(name);
// };

// getName("Justin");

console.log(document.firstChild);
