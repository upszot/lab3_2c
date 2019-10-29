
/*
lo que logra que funcione con el defer en el scr del index
let selPaises = document.getElementById("selPaises");
console.log(selPaises);
*/

window.addEventListener('load',function(){
    selPaises = document.getElementById('selPaises');
    selCiudades = document.getElementById('selCiudades');

    cargarSelect(selPaises,obtenerPaises(datos));
    cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));
    
    selPaises.addEventListener('change',e=>{        
        cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));        
    });
});

function obtenerPaises(array)
{
    //map recibe -> valor,indice,array
    // let paises=array.map(function(element){
    //     return element.pais;
    // });

    //Version archicada
    // let paises=array.map((element)=>{
    //     return element.pais;
    // });

    //version achicada 2
    // let paises=array.map(element=>{
    //     return element.pais;
    // });

    //version achicada 3 (pq tiene 1 solo return)
    let paises=array.map(element=> element.pais)
    .unique()
    .sort();

    console.log(paises);
}

function obtenerCiudades(array,pais)
{
    // let ciudades= array.filter(function (element){
    //     return element.pais===pais;
    // } );

    return array.filter(element=>element.pais===pais)
    .map(element=>element.ciudad)
    .unique()
    .sort();
 
}

/***
 * Parametros
 * sel = select donde cargar datos
 * array=  array de string de datos a cargar
 */
function cargarSelect(sel,array)
{
    //selCiudades.opcion.length=0;
    array.array.forEach(element => {
        let opcion = document.createElement('option');
        opcion.setAttribute('value',element);
        let texto=document.createTextNode(element);
        opcion.appendChild(texto);
        sel.appendChild(opcion);
    });

}

Array.prototype.unique = function(){
    return [...new Set(this)];
}

function limpiarSelect (sel){
    sel.opcion.length=0;

    while(sel.hasChildNodes()){
        
    }
}