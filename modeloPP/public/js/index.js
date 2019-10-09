let frm;

window.addEventListener('load', inicializarManejadores);

function inicializarManejadores() {
     frm = document.forms[0];
     frm.addEventListener('submit', manejadorSubmit);
     document.getElementById("btnBorrar").addEventListener('click', borrarAnuncio);
     traerAnuncios();
}

function manejadorSubmit(e) {
    e.preventDefault();
    let nuevoAnuncio = obtenerAnuncio(e.target, false);
    altaAnuncio(nuevoAnuncio);
 }

function manejadorModificar(e) {
    e.preventDefault();
    let anuncio = obtenerAnuncio(e.target, true);
    modificarAnuncio(anuncio);
}

function obtenerAnuncio(frm, tieneId) {
     var datos=new Array();
    console.log(frm.elements);

    for (element of frm.elements) {
        switch (element.name) {
            case "titulo":
                datos.push(element.value);
                break;
            case "descripcion":
                datos.push(element.value);
                break;
            case "precio":
                datos.push(element.value);
                break;
            case "num_wc":
                datos.push(element.value);
                break;
            case "num_estacionamiento":
                datos.push(element.value);
                break;
            case "num_dormitorio":
                datos.push(element.value);
                break;
            case "transaccion":
                if (element.checked === true) {
                    datos.push(element.value);
                }
                break;
            case "idAnuncio":
                if (tieneId == true) {
                    id = element.value;
                    datos.push(element.value);
                } else {
                    datos.push(-1);
                }
                break;
        }
    }
    console.log(datos);
    //return new Anuncio(id, titulo, descripcion, precio, transaccion, num_wc, num_estacionamiento, num_dormitorio);
    return new Anuncio(datos[0],datos[1],datos[2],datos[3],datos[4],datos[5],datos[5],datos[6]);
}

function obtenerId(frm) {
    let id;
    for (element of frm.elements) {
        if (element.name == "idAnuncio") {                        
            //console.log(`id=${element.value}`);
            return `id=${element.value}`;
        }
    }    
}

function altaAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            traerAnuncios();
        }
    }
    xhr.open('POST', 'http://localhost:3000/altaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
}

function traerAnuncios() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {


            let objetos = JSON.parse(xhr.responseText);
            document.getElementById("divTabla").innerText = "";
            document.getElementById("divTabla").appendChild(crearTabla(objetos.data));
            let tds = document.getElementsByTagName("td");
            for (var i = 0; i < tds.length; i++) {
                let td = tds[i];
                td.addEventListener('click', setValues);
            }
        }

    }
    xhr.open('GET', "http://localhost:3000/traerAnuncios", true);
    xhr.send();
}

function setValues(e) {
    let tr = e.target.parentElement;
    let nodos = tr.childNodes;
    document.getElementById("idAnuncio").value = nodos[0].innerText;
    document.getElementById("idAnuncio").hidden = false;

    document.getElementById("lblId").hidden = false;
    document.getElementById("titulo").value = nodos[1].innerText;
    if (nodos[2].innerHTML == "Venta") {
        document.getElementById("transaccionVenta").checked = true;
    } else {
        document.getElementById("transaccionAlquiler").checked = true;
    }
    document.getElementById("descripcion").value = nodos[3].innerText;
    document.getElementById("precio").value = nodos[4].innerText;
    document.getElementById("num_wc").value = nodos[5].innerText;
    document.getElementById("num_estacionamiento").value = nodos[6].innerText;
    document.getElementById("num_dormitorio").value = nodos[7].innerText;

    document.getElementById("btnCrearModificar").innerText = "Modificar";
    document.getElementById("btnBorrar").hidden = false;
    frm.removeEventListener('submit', manejadorSubmit);
    frm.addEventListener('submit', manejadorModificar);
}

function limpiarValues() {
    
    document.getElementById("idAnuncio").value = "";
    document.getElementById("idAnuncio").hidden = true;
    document.getElementById("lblId").hidden = true;

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("num_wc").value = "";
    document.getElementById("num_dormitorio").value = "";
    document.getElementById("num_estacionamiento").value = "";
    document.getElementById("transaccionVenta").checked = false;
    document.getElementById("transaccionAlquiler").checked = false;


    document.getElementById("btnCrearModificar").innerText = "Crear";
    document.getElementById("btnBorrar").hidden = true;
}

function modificarAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            traerAnuncios();
            limpiarValues();
            frm.removeEventListener('submit', manejadorModificar);
            frm.addEventListener('submit', manejadorSubmit);
        }
    }
    xhr.open('POST', 'http://localhost:3000/modificarAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    anuncio.active = true;
    xhr.send(JSON.stringify(anuncio));
}

function borrarAnuncio() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            traerAnuncios();
            limpiarValues();
            frm.removeEventListener('submit', manejadorModificar);
            frm.addEventListener('submit', manejadorSubmit);
        }
    }
    xhr.open('POST', 'http://localhost:3000/bajaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');    
    xhr.send(obtenerId(frm));
}