import {canExecuteFastAttack , canSpy , canSignalPrisoner ,canFreePrisoner} from './annalyns-infiltration.js'

let result = canExecuteFastAttack(true);
console.log(result); //passed

result = canSpy (true,false,false);
console.log(result);//passed

result = canSignalPrisoner(false,true);
console.log(result);

result = canFreePrisoner(true,false,true,true);
console.log(result);



