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

let funtionEnviarMision = function(...heroes:string[]):void{    
    for(let i=0;i<length;i++)
    {
        console.log(heroes[i] + " enviado");
    }    
}


funtionEnviarMision("Batman","Ironman","Hulk");

//console.log(funtionEnviarMision (Eheroes[Eheroes.avenger]));

//console.log(funtionEnviarMision ());

//tipo en el objeto
/*
let flash:{nombre:string,edad:number,poderes:string[],getNombre:()=>string}=
{
    nombre: "Barry allen",
    edad:24,
    poderes:string[],
    getNombre(){
        return this.nombre;
    }
};
*/


//tipo personalizado
type Heroe={nombre:string,edad:number,poderes?:string[],getNombre:()=>string};
let iroman:Heroe={
    nombre:"Tony Stark",
    edad:24,
    getNombre:function(){return this.nombre;}
}
console.log(iroman.getNombre());

//interfaces
interface IHeroe{
    nombre:string,
    poder?:string,
    mostrar?():string
}
let wolvering:IHeroe={
    nombre: "james",
    poder:"lala"
};

console.log(wolvering.nombre);

//Interface en clases
class Avenger implements IHeroe{
    nombre:string="un avenger";
}

class Mutante implements IHeroe{
    nombre:string="un mutante";
}

let unAvenger=new Avenger();
let unMutante=new Mutante();

console.log("unAvenger: " + unAvenger.nombre);
console.log("unMutante: " + unMutante.nombre);


interface iFuncDosNumeros{
    (num1:number,num2:number):number;
}
let miFuncion:iFuncDosNumeros;
miFuncion=(num1:number,num2:number)=>num1+num2;

console.log(miFuncion(1,5));
