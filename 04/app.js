import {dayRate,daysInBudget,priceWithMonthlyDiscount} from './freelancer-rates.js';

let result = [];

result = dayRate(89);
console.log(result);

result = daysInBudget(20000,89);
console.log(result);

result = priceWithMonthlyDiscount(89,230,0.42);
console.log(result);
