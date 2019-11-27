
window.addEventListener('load',()=>{
    document.forms[0].addEventListener('submit',guardarAnuncio);
    document.getElementById("mostrar").addEventListener('click',cargarDatos);
    document.getElementById("eliminar").addEventListener('click',eliminar);

})


function cargarDatos() {
    console.log("cargarDatos");
    let aux= document.getElementById("tabladinamica");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4){
            if(xhr.status==200){
                let respuesta= JSON.parse(xhr.responseText);
                console.log(JSON.parse(xhr.responseText));
                if(respuesta["message"]=="Carga exitosa"){
                    
                    aux.innerHTML="";
                    aux.appendChild(tableHelper(respuesta["data"]));
                    document.getElementById("eliminar").style.visibility="visible";
                }else{
                    aux.innerHTML='fallo coneccion';
                }
            }
        }else{
            aux.innerHTML='<img src="./img/831.gif" alt="imagen spiner"></img>';
        }
    };
    //Envio la peticion get
    var url = "http://localhost:3000/traerAnuncios";
    xhr.open('GET', url, true);
    xhr.send();
}


function guardarAnuncio(e){
    e.preventDefault();

    if(document.forms[0].idanuncio.value!=""){
        modificar();
    }else{
        let aux= document.getElementById("tabladinamica");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4){
                if(xhr.status==200){
                    if(xhr.responseText=="Alta Exitosa"){
                        document.forms[0].reset();
                        cargarDatos();
                    }else{
                        aux.innerHTML="fallo alta anuncio";
                    }
                }else{
                    aux.innerHTML="fallo la conexion";
                }
            }else{
                aux.innerHTML='<img src="./img/831.gif" alt="imagen spiner"></img>';
            }
        };
        var url = "http://localhost:3000/altaAnuncio";
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        let data=traeDatosForm();
        xhr.send(JSON.stringify(data));
    }
    
}


function modificar(){

    let aux= document.getElementById("tabladinamica");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4){
            if(xhr.status==200){
                if(xhr.responseText=="Modificacion exitosa"){
                    cargarDatos();
                    document.forms[0].reset();
                }else{
                    aux.innerHTML="fallo alta anuncio";
                }
            }else{
                aux.innerHTML="fallo la conexion";
            }
        }else{
            aux.innerHTML='<img src="./img/831.gif" alt="imagen spiner"></img>';
        }
    };
    var url = "http://localhost:3000/modificarAnuncio";
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    let data=traeDatosForm();
    console.log("modificar");
    console.log(JSON.stringify(data));
    xhr.send(JSON.stringify(data));

}

function eliminar(){
    

        let aux= document.getElementById("tabladinamica");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4){
                if(xhr.status==200){
                    let msj=JSON.parse(xhr.responseText);
                  
                    if(msj["message"]=="Baja exitosa"){
                        document.forms[0].reset();
                        cargarDatos();
                        
                    }else{
                        aux.innerHTML="fallo Baja anuncio";
                    }
                }else{
                    aux.innerHTML="fallo la conexion";
                }
            }else{
                aux.innerHTML='<img src="./img/831.gif" alt="imagen spiner"></img>';
            }
        };
        var url = "http://localhost:3000/bajaAnuncio";
    
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

        xhr.send("id="+document.forms[0].idanuncio.value);
    
}

function traeDatosForm(){
    let id=document.forms[0].idanuncio.value;
    let titulo=document.forms[0].titulo.value;
    let transaccion="alquiler";
    if(document.forms[0].Venta.checked){
        transaccion="Ventas";
    }
    let descripcion=document.forms[0].descripcion.value;
    let precio='$'+document.forms[0].precio.value;
    let num_wc=document.forms[0].banios.value;
    let num_estacionamiento=document.forms[0].autos.value;
    let num_dormitorio=document.forms[0].dormitorios.value;
    
    var anuncio= new Anuncio(id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio);
    return anuncio;
}

function llenaFormulario(e){
    console.log("llena");
    let tr=e.target.parentNode;
    let datos=tr.childNodes;
    console.log(datos);
    document.forms[0].idanuncio.value=datos[0].innerText;
    document.forms[0].titulo.value=datos[1].innerText;
    let transaccion=datos[2].innerText;
    if(transaccion=="alquiler"){
        document.forms[0].Alquiler.checked=true;
    }else{
        document.forms[0].Venta.checked=true;
    }
    document.forms[0].descripcion.value=datos[3].innerText;
    document.forms[0].precio.value=datos[4].innerText;
    document.forms[0].banios.value=datos[5].innerText;
    document.forms[0].autos.value=datos[6].innerText;
    document.forms[0].dormitorios.value=datos[7].innerText;
    

}