// import {Car} from './Car.js';
// import { Person} from './Persone.js';


// let Persone1 =  new Person("Karla",20);

// let mazda = new Car("nose",2004,Persone1);
// console.log(mazda);


const Players = {
    position: " ",
    number: 0,
    name: " ",
}

const barcelonaPlayer = Object.create(Players);
barcelonaPlayer.position = "MD";
barcelonaPlayer.number = 14;
barcelonaPlayer.name = "Reus"
barcelonaPlayer.sayHello = function () {
    return "hello";
}

let result = "";
for(const property in barcelonaPlayer){
    console.log(barcelonaPlayer[property]);
}

console.log(Object.getOwnPropertyNames(barcelonaPlayer));



const array  = [1,2,3]
const newArray = array.map(element=>element*2)

console.log(newArray);