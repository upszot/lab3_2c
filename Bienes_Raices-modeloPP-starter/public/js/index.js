var boton, botonAlta;
var tr;
var objetoElegido = null;
var onjeto = [];
//[{"id":"1","titulo":"Casa de Lujo en la montaña","transaccion":"Venta",
//"descripcion":"Casa en la montaña con excelente vista, acabados de lujo a un precio irresistible"
//,"precio":"$4,500,0000","num_wc":"3","num_estacionamiento":1,"num_dormitorio":5,"active":"true"}

window.addEventListener("load", asignarManejadores);

function asignarManejadores() {

    botonAlta = document.getElementById("btnAlta");
    botonAlta.addEventListener('click', leerObjeto, false);

    boton = document.getElementById("btnCargar");
    boton.addEventListener('click', traerObjeto, false);
    /*    boton.addEventListener('click', armarListado, false); */
}

function formAlta() {
    var formulario = document.getElementById("info");


}

funcion agregarTxt(texto) {
    var armarTxtId = "txt" + texto;
    var txtImput = document.createElement("imput");
    var lblImput = document.createElement("label");
    txtImput.setAttribute("form", );
}

function agregarBoton(texto) {
    var armarTextoID = "btn" + texto;
    var btnCancelar = document.createElement('input');
    btnCancelar.setAttribute('type', 'button');
    btnCancelar.setAttribute('class', 'btn');
    btnCancelar.setAttribute('value', texto);
    btnCancelar.setAttribute('id', armarTextoID);
    return btnCancelar;
}

function armarListado() {

    var div = document.getElementById("info");

    document.getElementById('info').innerHTML = " "; //borra todo lo anterior

    var header = document.createElement('tr');
    var tabla = document.createElement('table');

    for (var key in Objeto[0]) {
        var th = document.createElement('th');
        var texto = document.createTextNode(key);
        th.appendChild(texto);
        header.appendChild(th);
    }

    tabla.appendChild(header);

    for (var fila in Objeto) {

        var tr = document.createElement('tr');
        tr.addEventListener('click', cargarFormularioSeleccionado, false); //escuchador a la celda

        for (var columna in Objeto[fila]) {
            var th = document.createElement('td');
            var texto = document.createTextNode(Objeto[fila][columna]);
            th.appendChild(texto);
            tr.appendChild(th);
        }

        tabla.appendChild(tr);

    }

    div.appendChild(tabla);

    //AGREGA BOTONES
    var btnCancelar = agregarBoton("Volver");
    btnCancelar.addEventListener('click', volverInicio, false);
    div.appendChild(btnCancelar);

}