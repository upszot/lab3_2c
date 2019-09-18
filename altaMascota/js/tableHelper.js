function crearTabla(array){
    var tabla=document.createElement("tabla");

    tabla.className="table";

    let cabecera=document.createElement("tr");
    for(atributo in array[0])
    {
        let th=document.createElement("th");
        th.textContent=atributo;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);
    //--------------------- cuerpo ---------------
    for(var i in array)
    {
        var fila=document.createElement("tr");
        var unObjeto=array[i];
        for(var j in unObjeto)
        {            
            var celda=document.createElement("td");
            var dato = document.createTextNode(unObjeto[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}




//******* mias ***********
function cargaDatosTabla(objeto)
{
    for (var fila in objetos) {

        var tr = document.createElement('tr');
        tr.addEventListener('click', cargarFormularioSeleccionado, false); //escuchador a la celda

        for (var columna in objetos[fila]) {
            var th = document.createElement('td');
            var texto = document.createTextNode(objetos[fila][columna]);
            th.appendChild(texto);
            tr.appendChild(th);
        }
        tabla.appendChild(tr);
    }
    div.appendChild(tabla);
}

function getHeaderTabla(cabecera)
{
    var header = document.createElement('tr');
    for (const key in cabecera) {
        var th = document.createElement('th');
        var texto = document.createTextNode(key.toUpperCase());
        th.appendChild(texto);
        header.appendChild(th);
    }
    return header;
}
