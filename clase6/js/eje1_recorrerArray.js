//window.addEventListener('load', ejem1);
window.addEventListener('load', ejem21);

let frm;
//window.addEventListener('submit',mostrar);

function mostrar()
{
    frm = document.forms[0];        
    let nro;

    nro=document.getElementById('Ejemplo').value;
    console.log ("Ejemplo a mostrar: " . nro);
    a='ejem';
    a+=nro;
    console.log("--------");
    console.log(a);
    
    console.log("--------");
    funcionAllamar(a);
    
}

function funcionAllamar(funcion) 
{   
    console.log(funcion);
}

//-------------------------------------------//

function ejem1()
{
    let array=["juan","ana",true,23,[1,2,3],{nombre:"jorge,edad:30"}];
    console.log("Ejemplo 1");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }
}

function ejem2()
{
    let array=["juan","ana",true,23,[1,2,3],{nombre:"jorge,edad:30"}];
    console.log("Ejemplo 2");
    for (const elemento of array) {
        console.log(elemento);
    }

}

function ejem3()
{
    let array=["juan","ana",true,23,[1,2,3],{nombre:"jorge,edad:30"}];
    console.log("Ejemplo 3");
    array.forEach( elemento =>  console.log(elemento) );   
}

function ejem3bis()
{
    let array=["juan","ana",true,23,[1,2,3],{nombre:"jorge,edad:30"}];
    console.log("Ejemplo 3");
    array.forEach(function (algo){
        console.log(algo);
    } );   
}

function ejem4()
{    
    console.log("Ejemplo 4");
    let numeros=[2,3,4,5,6];
    let retorno= numeros.forEach(numero => console.log(numero * numero) );   

    console.log("-------");
    console.log(retorno);
    console.log("-------");
    console.log(numeros);
}

function ejem5()
{    
    console.log("Ejemplo 5");
    let numeros=[2,3,4,5,6];
    let cuadrados=[];
    let retorno= numeros.forEach(numero => cuadrados.push(numero * numero) );   

    console.log("-------");
    console.log(retorno);
    console.log("-------");
    console.log(cuadrados);
}
function ejem6()
{    
    console.log("Ejemplo 6");
    let array=["juan","ana",true,23,[1,2,3],{nombre:"jorge",edad:30}];
    console.log(array.some(elemento => elemento === 'julia'));
    //some funciona como un OR 
    //every funciona como un AND
}
function ejem7()
{    
    console.log("Ejemplo 7");
    let array=["juan","ana",{nombre:"lalala"}];
    //los elementos del array tienen que ser todos del mismo tipo, entonces como ahi tengo un objeto no funciona
    console.log(array.every(elemento => elemento.includes === ('a') ));    
}
function ejem8()
{    
    console.log("Ejemplo 8");    
    let numeros=[2,3,4,5,6];
    retorno=numeros.forEach((a,b,c,d) => {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        
    });
}
function ejem9()
{    
    console.log("Ejemplo 9");    
    let numeros=[2,4,400,5,6];
    let numeros2=[20,41,...numeros];
    
    console.log(numeros.sort( (a, b)=> a-b ));
    console.log(numeros2);
    console.log("----------------");

    let personas=[
        {nombre:"juan" , edad:30},
        {nombre:"juan2" , edad:20},
        {nombre:"juan4" , edad:40},
    ];

    let personas2={...personas}; // copias elemento por elemento... 

    console.log(personas);
    personas.sort( (p1,p2)=> p1.edad - p2.edad );
    console.log(personas);

    //console.log(numeros.sort( (a, b)=> a-b );

}
function ejem10()
{    
    console.log("Ejemplo 10");    
    let p ={
        nombre: "sofia",
        edad: "40"
    };
    let  {nombre,edad}=p;
    console.log(nombre + " " + edad);
}

function ejem11()
{    
    console.log("Ejemplo 11");
    let numeros=[2,3,4,5,6];
    let dobles;
    //parametros funcion map=> elemento, indice, array , Retorna un array
    dobles=numeros.map( elemento => elemento * 2 ); 
    console.log(dobles);
    console.log("--------");
    dobles=numeros.map( elemento => elemento > 2 ); 
    console.log(dobles);   
}

function ejem12()
{    
    console.log("Ejemplo 12");
    let array=["juan","ana"];
    
    //parametros funcion map=> elemento, indice, array , Retorna un array
    dobles=array.map( elemento => elemento.length ); 
    console.log(dobles);    
}
function ejem13()
{    
    console.log("Ejemplo 13");
    let array=[
        { nombre: "juan"},
        { nombre: "ana" }
    ];
    
    //parametros funcion map=> elemento, indice, array , Retorna un array
    dobles=array.map( elemento => elemento.nombre.length ); 
    console.log(dobles);    
}
function ejem14()
{    
    console.log("Ejemplo 14");
    let array=[
        { nombre: "juan"},
        { nombre: "ana" }
    ];
    
    let nombres= array.map(p=> p.nombre)
    console.log(nombres);

    nombres.forEach(nombre => {
        let item=document.createElement('li');
        item.textContent=nombre;
        document.getElementById('listaNombres').appendChild(item);
    })

}

function ejem15()
{    
    console.log("Ejemplo 15");
    let array1 =["juan", "pablo", "pepe"];

    let array2=[
        { nombre: "juan"},
        { nombre: "ana" },
        { nombre: "lucio" },
    ];
    
    let nombres= array1.filter(elemento=> elemento.includes('a') );
    let nombres2= array2.filter(elemento=> elemento.nombre.includes('a') );
    console.log(nombres);
    console.log(nombres2);
    
// selected  -> usas el filter
//check columnas -> usas el map

}
function ejem16()
{    
    console.log("Ejemplo 16");
    let array1 =["juan", "pablo", "pepe"];
    let numeros=[2,3,4,5,6];

    let array2=[
        { nombre: "juan"},
        { nombre: "ana" },
        { nombre: "lucio" },
    ];
    let personas=[
        {nombre:"juan" , edad:30},
        {nombre:"juan2" , edad:20},
        {nombre:"juan4" , edad:40},
    ];
    let suma;

    //reduce Parametros -> 1ro valor anterior, 2 actual, 3 indice, 4 vector
    suma=numeros.reduce( (acumulador,elemento)=> acumulador + elemento , 0 ); 
    console.log(suma);
    suma=numeros.reduce( (acumulador,elemento)=> acumulador + elemento ); 
    console.log(suma);
    multiplicacion=numeros.reduce( (acumulador,elemento)=> acumulador * elemento ); 
    console.log(multiplicacion);
    
    promedio=personas.reduce( (acumulador,persona)=> acumulador + persona.edad ,0); 
    console.log("Promedio: " + promedio / personas.length);


    
// selected  -> usas el filter
//check columnas -> usas el map
//reduce -> devuelve un unico valor, no modifica el array original

}

function ejem17()
{    
    console.log("Ejemplo 17");
    
    let personas=[
        {nombre:"juan" , edad:30  , sexo: "m"},
        {nombre:"juan2" , edad:20 , sexo: "f"},
        {nombre:"juan4" , edad:40 , sexo: "m"},
    ];
 
    hombres=personas.filter(persona => persona.sexo === "m");
    console.log(hombres);
    let edades = hombres.map(hombre => hombre.edad);
    console.log(edades);

    let sumaEdades=edades.reduce( (suma,edad)=> suma + edad,0);

    console.log("sumaEdades: " + sumaEdades);   
}

function ejem18()
{    
    console.log("Ejemplo 18");
    
    let personas=[
        {nombre:"juan" , edad:30  , sexo: "m"},
        {nombre:"juan2" , edad:20 , sexo: "f"},
        {nombre:"juan4" , edad:40 , sexo: "m"},
    ];
 
    hombres=personas.filter(persona => persona.sexo === "m")
                    .map(hombre => hombre.edad)
                    .reduce( (suma,edad)=> suma + edad,0);

    console.log("sumaEdades: " + hombres);
}

function ejem19()
{    
    console.log("Ejemplo 19");
    
    let personas=[
        {nombre:"juan" , edad:30  , sexo: "m"},
        {nombre:"juan2" , edad:20 , sexo: "f"},
        {nombre:"juan4" , edad:40 , sexo: "m"},
    ];
 
    hombres=personas.filter(persona => persona.sexo === "m")
                    .map(hombre => hombre.edad)
                    .reduce( (suma,edad, indice,array) => suma + edad / array.length,0);

    console.log("promedio: " + hombres);
}

function ejem20()
{    
    console.log("Ejemplo 20");
    
    let numeros=[1,2,3,4,5,1,5,1];

    let personas=[
        {nombre:"juan" , edad:30  , sexo: "m"},
        {nombre:"juan2" , edad:20 , sexo: "f"},
        {nombre:"juan4" , edad:40 , sexo: "m"},
    ];
 
    let x=new Set(numeros);
    console.log(x);

    let sinRepetir=[...x];
    console.log(sinRepetir);

    let sinRepetir2=[...new Set(numeros)];
    console.log(sinRepetir2);
    
    //agrego un nuevo metodo al prototipo de los array
    Array.prototype.unique=(arr)=> [...new Set(this)];
    console.log(sinRepetir2);    
}

function ejem21()
{    
    console.log("Ejemplo 21");
    
    let numeros=[1,2,3,4,5,1,5,1];

    let personas=[
        {nombre:"juan" , edad:30  , sexo: "m"},
        {nombre:"juan2" , edad:20 , sexo: "f"},
        {nombre:"juan4" , edad:40 , sexo: "m"},
    ];
    

    let sinRepetir2=[...new Set(numeros)];
    console.log(sinRepetir2);
    
    //agrego un nuevo metodo al prototipo de los array
    Array.prototype.unique=(arr)=> [...new Set(this)];
    console.log(sinRepetir2);    
}

