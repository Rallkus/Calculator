import {Person} from './person'
let people = [
    new Person("Paco","ElMaco",Person.getRoles().USER),
    new Person("Paca","LaMaca",Person.getRoles().TEACHER),
    new Person("Root","Toot",Person.getRoles().ADMIN)]
;

document.addEventListener("DOMContentLoaded", function() {   
    let sel = document.getElementById('users');
    people.forEach((person)=>{
        let opt = document.createElement('option');
        opt.innerHTML = person.name;
        opt.value = person.name;
        sel.appendChild(opt);
    });
    document.getElementById("add").addEventListener("click", addInput);
    document.getElementById("execute").addEventListener("click", calculate);
});

document.addEventListener("change", function() { 
    document.getElementById('operations').innerHTML = "";  
    let user = document.getElementById('users');
    user = users[users.selectedIndex].value;
    user = people.filter((person)=>person.name===user);
    let sel = document.getElementById('operations');
    user[0].getAllowedFunctions().forEach((operation)=>{
        let opt = document.createElement('option');
        opt.innerHTML = operation;
        opt.value = operation;
        sel.appendChild(opt);
    });
});

function addInput() {
    let adding = document.getElementById("inputs");
    adding.insertAdjacentHTML('beforeend', '<br /><input type="number" name="operand[]" />');
}


function calculate(){
    let els = document.getElementsByName("operand[]");
    let arrayO=[];
    els.forEach((element)=>{
        arrayO.push(element.value);
    })
    let user = document.getElementById('users');
    user = users[users.selectedIndex].value;
    let operation = document.getElementById('operations');
    operation = operation[operation.selectedIndex].value;
    user = people.filter((person)=>person.name===user);
    arrayO=arrayO.map((valorACtual)=>{
        return parseInt(valorACtual);
    });
    document.getElementById('result').value = user[0].calculator(arrayO, operation);
}