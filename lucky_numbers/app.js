import {twoSum,luckyNumber,errorMessage} from './lucky-numbers.js'

let result = twoSum([1, 2, 3], [0, 7]);
// //=> 130

// // [1, 2, 3] represents 123 and [0, 7] represents 7.
// // 123 + 7 = 130
// console.log(result);

result = luckyNumber(1441);
//=>  true
console.log(result);
result = luckyNumber(123);
console.log(result);


let rresult = errorMessage('abc');
// => 'Must be a number besides 0'
console.log(rresult);