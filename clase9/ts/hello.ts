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

//**funtionEnviarMision = devuelve el heroe enviado  */
// con parametro opcional ?
let funtionEnviarMision = function(heroe?:string):string{    
    return heroe + " enviado";
}

console.log(funtionEnviarMision (Eheroes[Eheroes.avenger]));

console.log(funtionEnviarMision ());

