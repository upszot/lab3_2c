var datos = [];

function cargarDatos(manejador) {
        datos = [];
        $.getJSON("http://localhost:3000/traerAnuncios", function(resp, status){
            for (var i = 0; i < resp.data.length; i++) {
                datos.push(new Anuncio(resp.data[i].titulo,
                    resp.data[i].transaccion,resp.data[i].descripcion,resp.data[i].precio,
                    resp.data[i].num_wc,resp.data[i].num_estacionamiento,
                    resp.data[i].num_dormitorio,resp.data[i].id));
            }
            if(manejador){
                manejador();
            }
            
        });
        
    }

   function guardarDatos(datos,cb) {
        $.post("http://localhost:3000/altaAnuncio",datos,function(data,status){
           /* if(cb){
                cb();
            }*/
            
        });
    }

 function   eliminarDato(id,cb) {
       /* var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                cb();
            }
        };
        var url = "http://localhost:3000/bajaAnuncio";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send("id=" + id);
        //xhr.send(id);*/
        $.post("http://localhost:3000/bajaAnuncio","id="+id,function(data,status){
            if(cb){
                cb();
            }
        });
    }

 function   modificarDato(anuncio,cb) {

        $.ajax({
            type:"POST",
            url:"http://localhost:30a00/modificarAnuncio",
            beforeSend: console.log("Enviando modificacion"),
            //contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
            //dataType : Intelligent Guess (xml, json, script, or html)
           /* error:console.log("sucedio un error"),
            success: console.log("Peticion Exitosa"),
            complete:console.log("Peticion finalizada"),*/
            data:anuncio
        })
        .done(function(){
            if(cb){
                cb();
            }
            console.log("Peticion exitosa");
        })
        .fail(function(xhr,textStatus,error){
            console.log(xhr.status + " - " + textStatus + ": " + error);
        })
        .always(function(hxr){
            console.log("Peticion finalizada");
        });
    }

function Anuncio(titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio,id){
    this.titulo=titulo;
    this.transaccion=transaccion;
    this.descripcion=descripcion;
    this.precio=precio;
    this.num_wc=num_wc;
    this.num_estacionamiento=num_estacionamiento;
    this.num_dormitorio = num_dormitorio;
    if(id){
        this.id = id;
    }
}