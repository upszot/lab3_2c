
/*
lo que logra que funcione con el defer en el scr del index
let selPaises = document.getElementById("selPaises");
console.log(selPaises);
*/

window.addEventListener('load',function(){
    selPaises = document.getElementById("selPaises");
    selCiudades = document.getElementById("selCiudades");
});

function cargarPais(array)
{

}

function cargarCiudades(array,pais)
{

}

/***
 * Parametros
 * sel = select donde cargar datos
 * array=  array de string de datos a cargar
 */
function cargarSelect(sel,array)
{
    array.array.forEach(element => {
        let opcion = document.createElement('option');
        opcion.setAttribute('value',element);
        let texto=document.createTextNode(element);
        opcion.appendChild(texto);
        sel.appendChild(opcion);
    });

}