//hello 
import {getItem, setItem,insertItemAtTop,removeItem,removeItemFromTop,insertItemAtBottom,removeItemAtBottom,checkSizeOfStack} from './enchatments.js'

let result = [];
const position = 2;
const replacementCard = 6;
const newCard = 8;

result = getItem([1, 2, 4, 1], position);
console.log(result);

result = setItem([1, 2, 4, 1], position, replacementCard);
console.log(result);

result = insertItemAtTop([5, 9, 7, 1], newCard);
console.log(result);

result = removeItem([3, 2, 6, 4, 8], position);
console.log(result);

result = removeItemFromTop([3, 2, 6, 4, 8]);
console.log(result);

result = insertItemAtBottom([5, 9, 7, 1], newCard);
console.log(result); 

result =  removeItemAtBottom([8, 5, 9, 7, 1]);
console.log(result);
