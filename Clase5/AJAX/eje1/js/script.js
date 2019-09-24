//Ajax sirve para enviar datos al servidor de forma asincronica

window.addEventListener('load',()=> {
    document.getElementById('btlTraer').addEventListener('click',TraerTexto);
})

function TraerTexto()
{
    // alert("hola");

    let xhr=new XMLHttpRequest(); //objeto peticion

    xhr.onreadystatechange= ()=> {
        //valores del readystate
        //0 
        //1 envio peticion
        //2 ???
        //3 una parte de la respuesta
        //4 ya esta la respuesta

        if(xhr.readyState==4)
        {// ya llego la respuesta.
            let info= document.getElementById('info');
            if(xhr.status==200)
            {//200 -> OK 
                // 4xx -> cosas que no se encontraron (404 Not found) 
                // 5xx -> problemas con el servidor
                
                //aca va el codigo que maneja la peticion cuando todo esta OK
                info.innerText=xhr.responseText;

            }
        }
        else
        {

        }
    }
    //recibe 3 argumentos, metodo de envio, url, que sea asincrono (true)
    xhr.open('GET','./documento.txt', true);
    xhr.send();

}

