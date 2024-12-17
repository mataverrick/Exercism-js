//hello
import {needsLicense,chooseVehicle,calculateResellPrice} from './vehicle-purchase.js';
let result  = true;

result = needsLicense('car');
console.log(result);

result = chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf');
console.log(result);

result = calculateResellPrice(1000, 15);
console.log(result);
