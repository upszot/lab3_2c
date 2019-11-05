
function altaAnuncio(anuncio) {
    if(localStorage)
    {
        localStorage.setItem("anuncio",JSON.stringify(anuncio));
    }
}

function traerAnuncios() {
    if(localStorage)
    {
        let objetos = JSON.parse(localStorage.getItem("anuncio"));
        console.log("----------------");
        console.log(objetos);
        console.log("----------------");
        
        document.getElementById("divTabla").innerText = "";
        document.getElementById("divTabla").appendChild(crearTabla(objetos.data));
        let tds = document.getElementsByTagName("td");
        for (var i = 0; i < tds.length; i++) {
            let td = tds[i];
            td.addEventListener('click', setValues);
        }
        
        
    }
    
}