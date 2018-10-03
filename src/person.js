//const customExceptions = require('./customExceptions');
//const calculatorFunctions = require('./calculatorFunctions');
import {fAdd,fMultiplier,fDoublefier} from './calculatorFunctions'
import {NoCalculatorFunctionNameError,AccessDeniedError} from './customExceptions';


const ROL={USER:'regular user',ADMIN:'root',TEACHER:'teacher'};
let operationDictionary = new Map([['ADD', new Map([['name', 'ADD'],['operator', fAdd], ['roles', [ROL.USER, ROL.TEACHER, ROL.ADMIN]]])],
['MULTIPLIER', new Map([['name', 'MULTIPLIER'],['operator', fMultiplier], ['roles', [ROL.TEACHER, ROL.ADMIN]]])],
['DOUBLEFIER', new Map([['name', 'DOUBLEFIER'],['operator', fDoublefier], ['roles', [ROL.TEACHER]]])]]);

/*let operationDictionary={
    //'ADD':{ operator:calculatorFunctions.fAdd,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},
    'ADD':{ operator:fAdd,roles:[ROL.USER,ROL.ADMIN,ROL.TEACHER]},
    //'MULTIPLIER': { operator:calculatorFunctions.fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},
    'MULTIPLIER': { operator:fMultiplier,roles:[ROL.ADMIN,ROL.TEACHER]},
    //'DOUBLEFIER': { operator:calculatorFunctions.fDoublefier,roles:[ROL.TEACHER]}
    'DOUBLEFIER': { operator:fDoublefier,roles:[ROL.TEACHER]}
  };*/

export class Person {    
         
    constructor(name,surname,rol=ROL.USER){
        this.name = name;
        this.surname = surname;
        this.rol = rol;    
    }

    static getRoles(){
        return ROL;
    }
    getAllowedFunctions(){
        let allowedFunctions = [];
        operationDictionary.forEach((operation)=>{
            if(operation.get('roles').includes(this.rol)){
                allowedFunctions.push(operation.get("name"));
            }
        });
        return allowedFunctions;
    }

    calculator(operands=[0],operator='ADD'){
        try {         
            let chosenOperation=operationDictionary.get(operator);
            if (!chosenOperation || typeof chosenOperation.get('operator') !== "function") throw new NoCalculatorFunctionNameError(); 
            if (!chosenOperation.get('roles').includes(this.rol)) throw new AccessDeniedError(); 
            //if (!chosenOperation.roles.includes(this.rol)) throw new AccessDeniedError(); 
            return chosenOperation.get('operator')(operands);
            //return chosenOperation.operator(operands);   
          } catch (error) {    
              console.log(error.name+" "+error.message);
              return error.constructor;
          }
    }
}


//module.exports = Person