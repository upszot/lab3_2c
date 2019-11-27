
window.addEventListener('load', () => {
    document.forms[0].addEventListener('submit', guardarAnuncio);
    cargarDatos();
    $('#eliminar').click(eliminar);
    iniciaEventosChk();

})

var arrayAnuncios = [];


function cargarDatos() {
    arrayAnuncios = [];
    let aux = document.getElementById("tabladinamica");
    aux.innerHTML = "";
    arrayAux = JSON.parse(localStorage.getItem("anuncios"));
    arrayAux.forEach(object => {
        let anunci = new anuncios(object._titulo, object._transaccion, object._descripcion, object._precio, object._num_wc, object._num_estacionamiento, object._num_dormitorio, object._id);
        arrayAnuncios.push(anunci);
    });
    document.getElementById("eliminar").style.visibility = "visible";
    
    aux.appendChild(crearTabla(arrayAnuncios));
    cargarSelect($('#ss_tipoTransaccion')[0], obtenerTransaccion(arrayAnuncios));
}

function mostrarTabla(array) {
    let aux = document.getElementById("tabladinamica");
    aux.innerHTML = "";
    document.getElementById("eliminar").style.visibility = "visible";
    aux.appendChild(tableHelper(array));
}

function traeNuevoId() {
    let anuncios = JSON.parse(localStorage.getItem("anuncios"));
    return anuncios.length + 1;
}

function guardarAnuncio(e) {
    e.preventDefault();
    if (document.forms[0].idanuncio.value != "") {
        modificar();
    } else {
        let data = traeDatosForm();
        data.id = traeNuevoId();
        let anuncios = JSON.parse(localStorage.getItem("anuncios"));
        //data.precio = '$' + data.precio;
        anuncios.push(data);
        localStorage.setItem("anuncios", JSON.stringify(anuncios));
        document.forms[0].reset();
        cargarDatos();
    }
}


function modificar() {
    let data = traeDatosForm();
    let anuncios = JSON.parse(localStorage.getItem("anuncios"));
    anuncios.forEach(element => {
        if (element._id == data.id) {
            element._titulo = data.titulo;
            element._transaccion = data.transaccion;
            element._descripcion = data.descripcion;
            element._precio = data.precio;
            element._num_wc = data.num_wc;
            element._num_estacionamiento = data.num_estacionamiento;
            element._num_dormitorio = data.num_dormitorio;
        }
    });
    localStorage.setItem("anuncios", JSON.stringify(anuncios));
    document.forms[0].reset();
    cargarDatos();
}

function eliminar() {

    let aux = document.getElementById("tabladinamica");
    let anuncios = JSON.parse(localStorage.getItem("anuncios"));
    let idAeliminar = document.forms[0].idanuncio.value;
    anuncios.splice(devuelvePosicionEnArray(anuncios, idAeliminar), 1);
    localStorage.setItem("anuncios", JSON.stringify(anuncios));
    document.forms[0].reset();
    cargarDatos();
}

function devuelvePosicionEnArray(arrayDatos, id) {

    for (var i = 0; i < arrayDatos.length; i++) {
        if (arrayDatos[i]._id == id) {
            return i;
        }
    }
}

function iniciaEventosChk() {
    $('#chk_titulo').click(filtrados);
    $('#chk_descripcion').click(filtrados);
    $('#chk_precio').click(filtrados);
    $('#chk_wc').click(filtrados);
    $('#chk_estacionamiento').click(filtrados);
    $('#chk_dormitorio').click(filtrados);
    $('#chk_transaccion').click(filtrados);
    $('#ss_tipoTransaccion').change(filtrados);

}

function filtrados() {

    var arrayAux = [];
    let arrayRetorno=[];

    switch ($('#ss_tipoTransaccion').val()) {
        case 'alquiler':
            arrayRetorno= arrayAnuncios.filter(obj=> obj.transaccion=='alquiler');
            break;
        case 'Ventas':
            arrayRetorno= arrayAnuncios.filter(obj=> obj.transaccion=='Ventas');
            break;
        case 'Todos':
            arrayRetorno=arrayAnuncios;
            break;
    }

    console.log(arrayRetorno.map(element=>element.precio)
    .reduce((prev, curr) => (parseInt(prev) + parseInt(curr))));


    arrayRetorno.forEach(element => {
        let aux = new Object;
        aux.id = element.id;
        if ($('#chk_titulo')[0].checked) {
            aux.titulo = element.titulo;
        }
        if ($('#chk_transaccion')[0].checked) {
            aux.transaccion = element.transaccion;
        }
        if ($('#chk_descripcion')[0].checked) {
            aux.descripcion = element.descripcion;
        }
        if ($('#chk_precio')[0].checked) {
            aux.precio = element.precio;
        }
        if ($('#chk_wc')[0].checked) {
            aux.num_wc = element.num_wc;
        }
        if ($('#chk_estacionamiento')[0].checked) {
            aux.num_estacionamiento = element.num_estacionamiento;
        }
        if ($('#chk_dormitorio')[0].checked) {
            aux.num_dormitorio = element.num_dormitorio;
        }
        arrayAux.push(aux);
    });
    
    

    
    mostrarTabla(arrayAux);
}

function traeDatosForm() {
    let id = document.forms[0].idanuncio.value;
    let titulo = document.forms[0].titulo.value;
    let transaccion = "alquiler";
    if (document.forms[0].Venta.checked) {
        transaccion = "Ventas";
    }
    let descripcion = document.forms[0].descripcion.value;
    let precio = document.forms[0].precio.value;
    let num_wc = document.forms[0].banios.value;
    let num_estacionamiento = document.forms[0].autos.value;
    let num_dormitorio = document.forms[0].dormitorios.value;

    var anuncio = new anuncios(titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio, id);

    return anuncio;
}

function llenaFormulario(e) {
    console.log("llena");
    let tr = e.target.parentNode;
    let datos = tr.childNodes;
    console.log(datos);
    document.forms[0].idanuncio.value = datos[0].innerText;
    document.forms[0].titulo.value = datos[1].innerText;
    let transaccion = datos[2].innerText;
    if (transaccion == "alquiler") {
        document.forms[0].Alquiler.checked = true;
    } else {
        document.forms[0].Venta.checked = true;
    }
    document.forms[0].descripcion.value = datos[3].innerText;
    document.forms[0].precio.value = datos[4].innerText;
    document.forms[0].banios.value = datos[5].innerText;
    document.forms[0].autos.value = datos[6].innerText;
    document.forms[0].dormitorios.value = datos[7].innerText;

}