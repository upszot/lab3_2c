//Ajax sirve para enviar datos al servidor de forma asincronica

window.addEventListener('load',()=> {
    document.getElementById('btlTraer').addEventListener('click',TraerTexto);
})

function TraerTexto()
{
    // alert("hola");

    let xhr=new XMLHttpRequest(); //objeto peticion

    xhr.onreadystatechange= ()=> {
        let info= document.getElementById('info');
        
        if(xhr.readyState==4)
        //valores del readystate
        //0 
        //1 envio peticion
        //2 ???
        //3 una parte de la respuesta
        //4 ya esta la respuesta
        {// ya llego la respuesta.
            if(xhr.status==200)
            {//200 -> OK 
                // 4xx -> cosas que no se encontraron (404 Not found) 
                // 5xx -> problemas con el servidor
                
                //aca va el codigo que maneja la peticion cuando todo esta OK
                // info.innerText=xhr.responseText;
                setTimeout(()=>{
                    info.innerText = xhr.responseText;

                },3000);
            }
            else
            {
                console.log(`Error: ".${xhr.status} - ${xhr.statusText}`);
            }
        }
        else
        {// todavia no termino de traer la info... pongo un spiner
            // info.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
            info.innerHTML = '<img src="./imagenes/spinner.gif" alt="spinner" />';

        }
    }
    //recibe 3 argumentos, metodo de envio, url, que sea asincrono (true)
    xhr.open('GET','./documento.txt', true);
    xhr.send();

}

function ponerSpinner() {
    var spinner = document.createElement('img');
    spinner.setAttribute('src', 'imagenes/spinner.gif');
    spinner.setAttribute('class', 'logo');
    spinner.setAttribute('alt', 'spinner');

    return spinner;
}