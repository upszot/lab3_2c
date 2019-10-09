//ATRIBUTOS DE ANUNCIO
//id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio;

//////////////////////LLAMADAS AJAX/////////////////////////////////
let frm;
window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];    
    frm.addEventListener('submit', manejadorSubmit, false);
    document.getElementById('btnBorrar').addEventListener('click',borrarAnuncio);
    
    cargarDatos();
}

function manejadorSubmit(e) 
{
    e.preventDefault();
    let anuncio= obtenerAnuncio(e.target,false);
    console.log(anuncio);
    altaAnuncio(anuncio);        
}

function manejadorModificar(e) 
{
    e.preventDefault();
    let anuncio= obtenerAnuncio(e.target,false);
//    console.log(anuncio);
    modificarAnuncio(anuncio);        
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

function altaAnuncio(anuncio) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            cargarDatos();            
        }       
    };
    
    var url = "http://localhost:3000/altaAnuncio";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(JSON.stringify(anuncio));
}

function borrarAnuncio() 
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) 
        {            
            cargarDatos();   
            limpiarvalues(); 
            frm.removerEventListener('submit',manejadorModificar);
            frm.addEventListener('submit',manejadorSubmit);
        }       
    };
    
    var url = "http://localhost:3000/bajaAnuncio";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type','x-www-form-urlencoded')
    xhr.send(obtenerId(frm));    
}

function setvalues(e)
{
    let tr=e.target.parentElement;
    let nodos=tr.childNodes;

    document.getElementById("idAnuncio").value=nodo[0].innerText;
    document.getElementById("idAnuncio").hidden=false;
    document.getElementById("lblidAnuncio").hidden=false;
    
    document.getElementById("titulo").value=nodo[1].innerText;

    if(nodo[2].innerHTML=='Alquiler')
    {
        document.getElementById("Alquiler").checked=true;
    }
    else
    {
        document.getElementById("Venta").checked=true;
    }

    document.getElementById("descripcion").value=nodo[3].innerText;
    document.getElementById("num_dormitorio").value=nodo[3].innerText;
    document.getElementById("num_estacionamiento").value=nodo[3].innerText;
    document.getElementById("num_wc").value=nodo[3].innerText;
    document.getElementById("precio").value=nodo[3].innerText;

    frm.removerEventListener('submit',manejadorSubmit);
    frm.addEventListener('submit',manejadorModificar);
}

function limpiarvalues()
{
    document.getElementById("idAnuncio").value='';
    document.getElementById("titulo").value='';
    document.getElementById("descripcion").value='';
    document.getElementById("num_dormitorio").value='';
    document.getElementById("num_estacionamiento").value='';
    document.getElementById("num_wc").value='';
    document.getElementById("precio").value='';
    
    document.getElementById("btncrearModificar").innerText='Alta';
    document.getElementById("btnBorrar").hidden=true;

}

function obtenerAnuncio(frm,tieneID)
{
    let id;
    let descripcion;
    let num_dormitorio;
    let num_estacionamiento;
    let num_wc;
    let precio;
    let titulo
    let transaccion;
    
    console.log(frm);
    for (elemento of frm.elements)    
    {
        switch (elemento.name) {
            case "idAnuncio":
                if(tieneID==true)
                {
                    id=elemento.value;
                }
                else
                {
                    id=-1;
                }
                break;
            case "titulo":
                titulo=elemento.value;
                break;        
            case "descripcion":
                descripcion=elemento.value;
                break;
            case "num_dormitorio":
                num_dormitorio=elemento.value;
                break;
            case "num_estacionamiento":
                num_estacionamiento=elemento.value;
                break;
            case "num_wc":
                num_wc=elemento.value;
                break;
            case "precio":
                precio=elemento.value;
                break;
            case "transaccion":
                if(elemento.checked)
                {
                    transaccion=elemento.value;
                }
                break;
        }
    }
    return new Anuncio(id, descripcion, num_dormitorio, num_estacionamiento, num_wc, precio, titulo, transaccion);
}

function obtenerId(frm)
{
    for(elemento of frm.elements)
    {
        if(elemento.name=='idAnuncio')
        {
            return `id=${elemento.value}`;
        }
    }
}
