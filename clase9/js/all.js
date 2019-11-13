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
class Avenger2 {
    constructor(nombre) {
        this.nombre = "unAvenger2";
        this.nombre = nombre;
    }
}
let av2 = new Avenger2("Hulk");
console.log("clase Avenger2: " + av2.nombre);
class Avenger3 {
    constructor(nombre) {
        this._nombre = "unAvenger3";
        this._edad = 0;
        this.mostrar = () => this._nombre;
        this._nombre = nombre;
    }
    get edad() { return this._edad; }
    set edad(e) { this._edad = e; }
}
let av3 = new Avenger3("Iroman");
console.log("clase 3 avenger: " + av3.mostrar());
av3.edad = 34;
console.log("clase 3 avenger: " + av3.edad);
class Xmen {
}
Xmen.nomnbre_De_clase = "Xmen";
console.log("Atributo statico: " + Xmen.nomnbre_De_clase);
//herencia
class AvengerHeredado extends Avenger2 {
}
let ah = new AvengerHeredado("heredado");
console.log("clase heredada: " + ah.nombre);
//Herencia2
class AvengerHeredado2 extends Avenger2 {
    constructor(nombre, edad) {
        super(nombre);
        this.edad = 0;
        this.edad = edad;
    }
}
let ah2 = new AvengerHeredado2("heredado2", 22);
console.log("clase heredado 2: " + ah2.edad + " " + ah2.nombre);
//Namespace
var Funciones;
(function (Funciones) {
    function f1() {
        console.log("yo soy la f1");
    }
    Funciones.f1 = f1;
    function f2() {
        console.log("yo soy la f2");
    }
    Funciones.f2 = f2;
})(Funciones || (Funciones = {}));
Funciones.f1();
Funciones.f2();
$(function () {
    console.log("ready");
});
/// <reference path="hello.ts" />
let mensaje2 = "chau";
console.log(mensaje2);
//# sourceMappingURL=all.js.map