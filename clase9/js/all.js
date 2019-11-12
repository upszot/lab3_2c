"use strict";
/*
//let mensaje:string ="hola mundo";

//recibe string o number o boolean
let mensaje:string |number | boolean=true;


//recibe lo que sea
let cualquierCosa:any=true;

console.log(mensaje);

//Array
let vector:number[] = [1,2,3,4];

//Tupla
let tupla:[number,string]=[1,"Ironman"];

//enum
enum Eheroes{
    xmen,
    avenger
}

console.log("enum: ");
console.log(Eheroes.avenger);
console.log(Eheroes[Eheroes.avenger]);
for(let key in Eheroes){
    console.log(key);
}
*/
//**funtionEnviarMision = devuelve el heroe enviado  */
// con parametro opcional ?
//let funtionEnviarMision = function(heroe?:string):string{    
//return heroe + " enviado";
//}
let funtionEnviarMision = function (...heroes) {
    for (let i = 0; i < length; i++) {
        console.log(heroes[i] + " enviado");
    }
};
funtionEnviarMision("Batman", "Ironman", "Hulk");
let iroman = {
    nombre: "Tony Stark",
    edad: 24,
    getNombre: function () { return this.nombre; }
};
console.log(iroman.getNombre());
let wolvering = {
    nombre: "james",
    poder: "lala"
};
console.log(wolvering.nombre);
//Interface en clases
class Avenger {
    constructor() {
        this.nombre = "un avenger";
    }
}
class Mutante {
    constructor() {
        this.nombre = "un mutante";
    }
}
let unAvenger = new Avenger();
let unMutante = new Mutante();
console.log("unAvenger: " + unAvenger.nombre);
console.log("unMutante: " + unMutante.nombre);
let miFuncion;
miFuncion = (num1, num2) => num1 + num2;
console.log(miFuncion(1, 5));
/// <reference path="hello.ts" />
let mensaje2 = "chau";
console.log(mensaje2);
//# sourceMappingURL=all.js.map