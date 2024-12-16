import { frontDoorResponse , frontDoorPassword , backDoorResponse , backDoorPassword} from "./door-policy.js";

let result = frontDoorResponse("erick");
console.log(result);

result = frontDoorPassword("erick");
console.log(result);

result =  backDoorResponse("erick");
console.log(result);

result = backDoorPassword("hola");
console.log(result);


