
function altaAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarDatos(); 
        }
    }
    xhr.open('POST', 'http://localhost:3000/altaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
}



function cargarDatos()
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            let objetos=JSON.parse(xhr.responseText)

            document.getElementById("divTabla").innerText='';
            document.getElementById("divTabla").appendChild(crearTabla(objetos.data));
            let tds=document.getElementsByTagName('td');
            for(var i=0;i<tds.length;i++)
            {
                let td=tds[i];
                td.addEventListener('click',setvalues);               
            }
        }       
    };
    //Envio la peticion get
    var url = "http://localhost:3000/traerAnuncios";
    xhr.open("GET", url, true);
    xhr.send();
}

// function traerAnuncios() {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {


//             let objetos = JSON.parse(xhr.responseText);
//             document.getElementById("divTabla").innerText = "";
//             document.getElementById("divTabla").appendChild(crearTabla(objetos.data));
//             let tds = document.getElementsByTagName("td");
//             for (var i = 0; i < tds.length; i++) {
//                 let td = tds[i];
//                 td.addEventListener('click', setValues);
//             }
//         }

//     }
//     xhr.open('GET', "http://localhost:3000/traerAnuncios", true);
//     xhr.send();
// }


function modificarAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarDatos();
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
            cargarDatos();  
            limpiarValues();
            frm.removeEventListener('submit', manejadorModificar);
            frm.addEventListener('submit', manejadorSubmit);
        }
    }
    xhr.open('POST', 'http://localhost:3000/bajaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');    
    xhr.send(obtenerId(frm));
}
