import {totalBirdCount,birdsInWeek,fixBirdCountLog} from './bird-watcher.js'

let result = 0;
let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

result =  totalBirdCount(birdsPerDay);
console.log(result);

result = birdsInWeek(birdsPerDay,1);
console.log(result);

birdsPerDay = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0];
const expected = [4, 0, 6, 1, 1, 4, 2, 0, 4, 4, 4, 0];
result = fixBirdCountLog(birdsPerDay);
console.log(result);