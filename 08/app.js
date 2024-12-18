import { timeToMixJuice,limesToCut, remainingOrders} from "./mixed-juices.js";

let result = 0;
result = timeToMixJuice('Berries & Lime');
console.log(result);    

result = limesToCut(0,[
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',]);
console.log(result);

result = remainingOrders(13, [
    'Energizer',
    'Green Garden',
    'Ruby Glow',
    'Pure Strawberry Joy',
    'Tropical Island',
    'Limetime',
  ]);
console.log(result);
