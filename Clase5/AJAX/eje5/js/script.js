window.addEventListener('load',()=>{
    document.forms[0].addEventListener('submit', enviarDatos)

})

function enviarDatos(e){

    //alert("Hola");
    //Menos en explorer funciona. (Sera nuestra peticion.)
    e.preventDefault();
    let data = traerDatos(e.target);
    let xhr = new XMLHttpRequest();
    //Nos interesa el ready state 4. y se lanza cada vez que cambia. Son 5
    xhr.onreadystatechange = ()=>{
        let info = document.getElementById('info');
        // aca va el codigo que maneja la peticion.
        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)
            {
                setTimeout(()=> {
                    info.innerText = xhr.responseText;
                    
                    clearTimeout(tiempo);
                },3000);
                //Asi te va a mostrar el txt
                ///TE lo muestra como html
                //info.innerHTML = "<h1> Esto es un titulo </h1>";
            }
            else{
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
        else{
            info.innerHTML = '<img src="./imagenes/spinner.gif" alt="spinner" />';
        }
    }
    ///Abrimos la conexion.
    xhr.open('GET','./servidor.php?' + data,true);
    
    //La enviamos.
    xhr.send();
    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'Servidor ocupado intente mas tarde';
        
    },4000);
}

function traerDatos(form){
    let nombre = form.nombre.value;
    let apellido = form.apellido.value;

    return `nombre=${nombre}&apellido=${apellido}`;
}