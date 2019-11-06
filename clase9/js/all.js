"use strict";
//let mensaje:string ="hola mundo";
//recibe string o number o boolean
let mensaje = true;
//recibe lo que sea
let cualquierCosa = true;
console.log(mensaje);
//Array
let vector = [1, 2, 3, 4];
//Tupla
let tupla = [1, "Ironman"];
//enum
var Eheroes;
(function (Eheroes) {
    Eheroes[Eheroes["xmen"] = 0] = "xmen";
    Eheroes[Eheroes["avenger"] = 1] = "avenger";
})(Eheroes || (Eheroes = {}));
console.log("enum: ");
console.log(Eheroes.avenger);
console.log(Eheroes[Eheroes.avenger]);
for (let key in Eheroes) {
    console.log(key);
}
//**funtionEnviarMision = devuelve el heroe enviado  */
// con parametro opcional ?
let funtionEnviarMision = function (heroe) {
    return heroe + " enviado";
};
console.log(funtionEnviarMision(Eheroes[Eheroes.avenger]));
console.log(funtionEnviarMision());
/// <reference path="hello.ts" />
let mensaje2 = "chau";
console.log(mensaje2);
//# sourceMappingURL=all.js.map