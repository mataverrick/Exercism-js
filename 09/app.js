import { createScoreBoard , addPlayer , removePlayer ,updateScore,applyMondayBonus,normalizeScore} from "./high-score-board.js";

let result = createScoreBoard();
console.log(result);
console.log("-------------------------------------------------------------------------------------");

result = addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373);
console.log(result);
console.log("-------------------------------------------------------------------------------------");

result= removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas');
console.log(result);
console.log("-------------------------------------------------------------------------------------");

result =  updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73);
console.log(result);
console.log("-------------------------------------------------------------------------------------");

result = applyMondayBonus({
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
});
console.log(result);
console.log("-------------------------------------------------------------------------------------");

function normalize(score) {
    return 2 * score + 10;
}
const params = { score: 400, normalizeFunction: normalize };
result = normalizeScore(params);

// let obj = {
//     nombre:"erick",
//     getNombre : function(){
//         return this.nombre;
//     }
// }

// console.log(obj.getNombre)