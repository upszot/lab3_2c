
function crearTabla(array){
    let tabla= document.createElement('table');
    tabla.setAttribute('border', '2px');

    tabla.appendChild(creaTh(array[0]));
    for(var i=0;i<array.length;i++){
        tabla.appendChild(creaTr(array[i]));
    }

    return tabla;
}

function creaTh(object){
    let cabecera=document.createElement("tr");
    for(atributo in object.devuelveAtributos()){
        var th=document.createElement("th");
        th.textContent=atributo;
        cabecera.appendChild(th);
    }
    return cabecera;
}

function creaTd(value){
    let td= document.createElement("td");
    td.appendChild(document.createTextNode(value));
    return td;
}

function creaTr(object){
    var fila=document.createElement("tr");
    fila.addEventListener('click',llenaFormulario);
    fila.appendChild(creaTd(object.id));
    fila.appendChild(creaTd(object.titulo));
    fila.appendChild(creaTd(object.transaccion));
    fila.appendChild(creaTd(object.descripcion));
    fila.appendChild(creaTd(object.precio));
    fila.appendChild(creaTd(object.num_wc));
    fila.appendChild(creaTd(object.num_estacionamiento));
    fila.appendChild(creaTd(object.num_dormitorio));
    return fila;
}

