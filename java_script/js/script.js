// var x={
//     nombre: 'lala', app:'pp',edad:30,saludar:function(){
//         return "hola, me llamo " + this.nombre;
//     }
// };


// console.log(x.saludar());

function Persona( nombre, apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.saludar=function(){
        return "Hola, me llamo " + this.nombre;
    }
}

var p1=new Persona("Juan","Perez",30);
var p2=new Persona("Ana","Gonzales",20);

Persona.prototype.altura=1.5;

console.log(p1.saludar());
console.log(p2.saludar());
console.log(p1.altura);
console.log(p2.altura);

