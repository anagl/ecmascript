function newFunction(name, age, country) {
    var name = name || 'Ana';
    var age = age || 44;
    var country = country || 'ES';
    console.log(name, age, country)
}

// es6

function newFunction2(name = 'Ana', age = 44, country = 'ES') {
    console.log(name, age, country)
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');
//----------------------------------------------------------------
let hello =  "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//-----------------------------------------------------------------

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, omnis. \n"
+ "otra frase epica que necesitamos";
// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);
//-----------------------------------------------------------------

let person = {
    'name': 'Ana',
    'age': 44,
    'country': 'ES'
}
console.log(person.name, person.age);

// es6
let {name, age, country} = person;
console.log(name, age, country);
//--------------------------------------------------------------------

let team1 = ['Ana', 'Julian', 'Oscar']
let team2 = ['Valera', 'Juan', 'Pedro']
let education = ['David', ...team1, ...team2];

console.log(education);

//--------------------------------------------------------------------
{
    var globalVar = 'Global Var';

}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//--------------------------------------------------------------------
const a = 'b';
a = 'a'; //-- No se puede dar valor

//--------------------------------------------------------------------
// es5
let name = 'Ana';
let age = 44;

obj = {name: name, age: age};
// es6
obj2 = {name, age};
console.log(obj2);

//--Arrow Function-----------------------------------------------------------
const names = [
    {name: 'Ana', age: 44},
    {name: 'Oscar', age: 32}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));
const listofNames3 = (name, age, country) =>{
    ...
}
const listofNames4 = name => {
    ...
}

const square = num => num * num;

//--Promesas-------------------------------------------------------------
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Todo ok')
        } else{
            reject('ko')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//-----------------------------------------------------------------------

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//--Módulos-----------------------------------------------------------------

import { hello } from './module';
hello();

//--Generators--------------------------------------------------------------
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------




