


function tableHelper(array){

    let tabla= document.createElement('table');
    tabla.setAttribute('border', '2px');
    let encabezado=document.createElement('tr');

    for(cabezeras in array[0]){
        let td=document.createElement('th');
        td.appendChild(document.createTextNode(cabezeras));
        encabezado.appendChild(td);
    }
    tabla.appendChild(encabezado);
    for(i in array){
        let tr=document.createElement('tr');
        tr.addEventListener('click',llenaFormulario);
        let datos=array[i];
        for(h in datos){
            let td=document.createElement('td');
            td.innerText=datos[h];
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }

console.log(tabla);
return tabla;
}

