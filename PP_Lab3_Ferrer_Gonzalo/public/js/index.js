//ATRIBUTOS DE ANUNCIO
//id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio;

//////////////////////LLAMADAS AJAX/////////////////////////////////
let frm;
window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];    
    frm.addEventListener('submit', manejadorSubmit);
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
    let anuncio= obtenerAnuncio(e.target,true);
//    console.log(anuncio);
    modificarAnuncio(anuncio);        
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
            frm.removeEventListener('submit',manejadorModificar);
            frm.addEventListener('submit',manejadorSubmit);
        }       
    };
    
    var url = "http://localhost:3000/bajaAnuncio";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type','x-www-form-urlencoded')
    xhr.send(obtenerId(frm));    
}

function setvalues(e)
{//id, descripcion, num_dormitorio, num_estacionamiento, num_wc, precio, titulo, transaccion,moneda;
    let tr=e.target.parentElement;
    let nodos=tr.childNodes;
    document.getElementById("idAnuncio").value=nodos[0].innerText;
    document.getElementById("idAnuncio").hidden=false;
    document.getElementById("lblidAnuncio").hidden=false;
    
    document.getElementById("titulo").value=nodos[1].innerText;
    
    if(nodos[2].innerHTML=='Alquiler')
    {
        document.getElementById("rdAlquiler").checked=true;
    } else {
        document.getElementById("rdVenta").checked=true;
    }
    
    document.getElementById("descripcion").value=nodos[3].innerText;
    document.getElementById("precio").value=nodos[4].innerText;
    document.getElementById("num_wc").value=nodos[5].innerText;
    document.getElementById("num_estacionamiento").value=nodos[6].innerText;
    document.getElementById("num_dormitorio").value=nodos[7].innerText;
    // document.getElementById("moneda").value=nodos[8].innerText;
    
    if(nodos[4].innerText.substr(0,3)=="USD")
    {
        document.getElementById("moneda").selectedIndex = "1";
    }else
    {
        document.getElementById("moneda").selectedIndex = "2";
    }

    
    // cadena.substr(inicio[, longitud])

    document.getElementById("btncrearModificar").innerText = "Modificar";
    document.getElementById("btnBorrar").hidden = false;
    frm.removeEventListener('submit',manejadorSubmit);
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
    document.getElementById("moneda").value='';
    
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
    let moneda;

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
                case "Moneda":
                    console.log(elemento.value.substr(4,));                    
                    moneda=elemento.value;
                break;
        }
    }    
    return new Anuncio(id, descripcion, num_dormitorio, num_estacionamiento, num_wc, precio, titulo, transaccion,moneda);
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
