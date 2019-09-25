//Ajax sirve para enviar datos al servidor de forma asincronica

window.addEventListener('load',()=> {
    document.getElementById('btlTraer').addEventListener('click',TraerTexto);
})

function TraerTexto()
{
    let xhr=new XMLHttpRequest(); //objeto peticion
    
    xhr.onreadystatechange= ()=> {
        let info= document.getElementById('info');
        if(xhr.readyState==4)
        {// ya llego la respuesta.    
            if(xhr.status==200)
            {                
                lista = JSON.parse(xhr.responseText);    
                setTimeout(() => {
                    info.innerHTML = " ";
                    for(persona in lista)
                    {
                        console.log(persona);
                        info.innerHTML += `${persona.id} ${persona.nombre} ${persona.email} ${persona.genero} <hr/>`;                        
                    }
                    clearTimeout(tiempo);
                }, 3000);
            }
            else
            {
                // info.innerHTML = " ";
                console.log(`Error: ".${xhr.status} - ${xhr.statusText}`);
            }
        }
        else
        {// todavia no termino de traer la info... pongo un spiner
            info.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
        }
    }
    //recibe 3 argumentos, metodo de envio, url, que sea asincrono (true)
    xhr.open('GET','./persona.json', true);
    xhr.send();

    var tiempo=setTimeout(() => {
        xhr.abort();
        info.inneerHTML= "servidor ocupado intete mas tarde";
    }, 4000);
}

function ponerSpinner() {
    var spinner = document.createElement('img');
    spinner.setAttribute('src', 'imagenes/spinner.gif');
    spinner.setAttribute('class', 'logo');
    spinner.setAttribute('alt', 'spinner');

    return spinner;
}