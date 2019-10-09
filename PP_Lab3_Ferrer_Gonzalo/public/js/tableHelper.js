//funciones utiles:
//document.createElement("elemento")
//setAttribute('atributo', 'valor');
//appendChild(child);
//createTextNode(valor);

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


