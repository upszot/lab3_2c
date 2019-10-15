//window.addEventListener('load', ejem1);
window.addEventListener('load', ejem3);

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

