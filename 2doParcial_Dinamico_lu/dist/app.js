window.onload = function () {
    asignarManejadores();
};
var nuevaVeterinaria = new Veterinaria("pedro lopez");
function asignarManejadores() {
    crearInicio(traerPersonas());
    /////ESTILOS
    $('body').css('background-image', 'url("./imagenes/fondo.jpg")');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('background-size', 'cover');
    $('body').css('background-attachment', 'fixed');
    $('body').css('background-position', 'center');
    $('#info').css("margin", "auto");
    $('#alta').css("margin", "auto");
    $('#nav').css("margin", "auto");
    $('#todo').css("background-color", "black");
    $('#todo').css("opacity", "0.8");
    $('#todo').css("width", "60%");
    $('#todo').css("display", "block");
    $('#todo').css("margin", "auto");
    $('#promedio').css("max-width", "50px");
    $('#promedio').css("min-width", "50px");
    $('#filtro').css("max-width", "100px");
    $('#filtro').css("min-width", "100px");
}
function mascotaVacia() {
    localStorage.setItem('ultimoId', "4999");
    var mascotaVacia = new Legislador(ETipo, null, null, null, null, null, localStorage.ultimoId++);
    var mascotas = [];
    mascotas.push(mascotaVacia);
    localStorage.setItem('mascotas', JSON.stringify(mascotas));
}
function crearInicio(personas) {
    var div = $('#info');
    var div2 = $('#alta');
    var nav = $('#nav');
    div.empty();
    div2.empty();
    nav.empty();
    div.attr("class", "col-6 center-block");
    div2.attr("class", "col-6 center-block");
    nav.attr("class", "col-6 center-block");
    var formulario = document.createElement('div');
    formulario.setAttribute('class', "form-group");
    var tabla = tablaFrmulario();
    var tr = document.createElement('tr');
    var btnAceptar = Recursos.prototype.agregarBoton("cargar", "btn btn-primary");
    btnAceptar.addEventListener('click', agregarMascota, false);
    /*     let boton = Recursos.prototype.agregarBoton("Limpiar localStorage.Mascotas", "btn btn-danger");
        boton.addEventListener('click', function () {
            localStorage.clear();
            asignarManejadores();
        });
        tr.appendChild(boton); */
    tr.appendChild(btnAceptar);
    tabla.appendChild(tr);
    formulario.appendChild(tabla);
    div2.append(formulario);
    if (verificarLocalStorageMascotas(personas)) {
        nav.append(encabezadoGenerla(personas));
        div.append(armarListado(personas));
    }
}
function tablaFrmulario() {
    var tabla = document.createElement('table');
    tabla.setAttribute('class', 'alta col col-12');
    console.log("localStorage.mascotas" + localStorage.mascotas);
    var personas = JSON.parse(localStorage.mascotas);
    for (var key in personas[0]) {
        var tr = document.createElement('tr');
        tr.appendChild(crearFormulario(key, null));
        tabla.appendChild(tr);
    }
    return tabla;
}
function verificarLocalStorageMascotas(personas) {
    var personas2 = [];
    var flag = false;
    for (var key in personas) { //FILTRO DEL PERSONA VACIA
        console.log("personas[key]['id'] -> " + personas[key]['id']);
        if (personas[key]['id'] >= 5000) {
            personas2.push(personas[key]);
            flag = true;
        }
    }
    if (flag) {
        localStorage.setItem("mascotas", JSON.stringify(personas2));
    }
    return flag;
}
function encabezadoGenerla(personas) {
    var tabla = document.createElement('form');
    tabla.setAttribute("class", "form-inline center-block");
    for (var key in personas[0]) {
        var box = Recursos.prototype.agregarCheckBox(key, true);
        var label = Recursos.prototype.agregarLabel(key, "lblcheck" + key);
        box.addEventListener('change', mapColumnas, false);
        box.setAttribute("style", "margin:15px 3px");
        label.setAttribute("style", "margin:15px 3px");
        tabla.appendChild(box);
        tabla.appendChild(label);
    }
    var comboAE = Recursos.prototype.agregarComboBoxSimple(arrayTipoAnimales(), null, "E");
    comboAE.addEventListener('change', function () {
        console.log("this.value: " + this.value);
        filterFiltas(this.value);
    }, false);
    tabla.appendChild(comboAE);
    tabla.appendChild(Recursos.prototype.agregarLabel("Promedio Edades", "promedio"));
    var promedio = Recursos.prototype.agregarTextInput('promedio', promedioEdades(personas));
    tabla.appendChild(promedio);
    tabla.appendChild(Recursos.prototype.agregarSalto());
    tabla.appendChild(Recursos.prototype.agregarLabel("% Femenino: ", "filtro"));
    var filtroNombre = Recursos.prototype.agregarTextInput('mujeres', filterNOmbre(personas));
    filtroNombre.addEventListener("input", function () {
        console.log("this.value: " + this.value);
        filterNOmbre(this.value);
    }, false);
    tabla.appendChild(filtroNombre);
    tabla.appendChild(Recursos.prototype.agregarSalto());
    ///hacer un combo box con varias filtro elegible, por ejemplo -el mayor -el menor
    var boton = Recursos.prototype.agregarBoton("Limpiar localStorage", "btn btn-danger");
    boton.addEventListener('click', function () {
        localStorage.clear();
        asignarManejadores();
    });
    tabla.appendChild(boton);
    return tabla;
}
function mapColumnas() {
    var personas = JSON.parse(localStorage.mascotas);
    var listadoFiltrado = personas.map(function (valor, clave, array) {
        var nuevoArray = {};
        for (var key in valor) {
            if ($('#ck' + key).is(':checked') == true) {
                nuevoArray[key] = valor[key];
            }
        }
        return nuevoArray;
    });
    var div = $('#info');
    div.empty();
    promedioEdades(listadoFiltrado);
    filterNOmbre(listadoFiltrado);
    div.append(armarListado(listadoFiltrado));
}
function filterFiltas(value) {
    var personas = JSON.parse(localStorage.mascotas);
    var listadoFiltrado = personas.filter(function (valor, clave, array) {
        console.log("valorNombre" + valor.tipo);
        console.log("value" + value);
        if (valor.tipo == value || value == "0") //la primer option es cero, podria ser -1
         {
            return true;
        }
    });
    var div = $('#info');
    div.empty();
    promedioEdades(listadoFiltrado);
    filterNOmbre(listadoFiltrado);
    div.append(armarListado(listadoFiltrado));
}
function filterNOmbre(personas) {
    var contador = 0;
    var contador2 = 1;
    var listadoFiltrado = personas.filter(function (valor) {
        console.log("valor sexo" + valor["sexo"]);
        contador2++;
        if (valor["sexo"] == "femenino") {
            return true;
        }
    }).reduce(function (previo) {
        console.log("previo" + previo);
        return previo + 1;
    }, 0);
    $('#mujeres').val((listadoFiltrado / (contador2 - 1)) * 100);
    return ((listadoFiltrado / (contador2 - 1)) * 100).toFixed(2);
}
function promedioEdades(personas) {
    var contador = 1;
    var edadesTotales = personas.map(function (user) {
        return user.edad;
    })
        .reduce(function (previo, actual) {
        contador++;
        return Math.floor(previo) + Math.floor(actual);
    });
    try {
        $('#promedio').val(edadesTotales / contador);
    }
    catch (e) {
        $('#promedio').val("0");
    }
    console.log(edadesTotales / contador);
    return (edadesTotales / contador).toFixed(2);
}
function armarEncabezado(arrayEncabezado) {
    var header = document.createElement('thead');
    var tr = document.createElement('tr');
    header.setAttribute('class', "thead-light");
    for (var key in arrayEncabezado[0]) {
        var th = document.createElement('th');
        var texto = document.createTextNode(key);
        th.appendChild(texto);
        tr.appendChild(th);
        header.appendChild(tr);
    }
    return header;
}
function armarListadoContenidos(arrayEncabezado) {
    var header = document.createElement('tbody');
    for (var fila in arrayEncabezado) {
        var tr = document.createElement('tr');
        for (var columna in arrayEncabezado[fila]) {
            var text = arrayEncabezado[fila][columna];
            console.log(" text  " + text);
            var td = document.createElement('td');
            var texto = document.createTextNode(arrayEncabezado[fila][columna]);
            td.appendChild(texto);
            tr.addEventListener('click', cargarForm);
            tr.appendChild(td);
            header.appendChild(tr);
        }
    }
    return header;
}
function cargarForm() {
    console.log("eee primer pibe:" + this.firstChild.textContent);
    var id = this.firstChild.textContent;
    var mascotas = JSON.parse(localStorage.mascotas);
    for (var fila in mascotas) //recorre el array y busca el elemento del id
     {
        if (mascotas[fila]["id"] == id) {
            //si lo encuntra, rellena el form
            $('#id').text(mascotas[fila]["id"]);
            $('#nombre').attr("value", mascotas[fila]["nombre"]);
            $('#apellido').attr("value", mascotas[fila]["apellido"]);
            $('#mail').attr("value", mascotas[fila]["mail"]);
            $('#edad').attr("value", mascotas[fila]["edad"]);
            $("input[name=legi][value=" + mascotas[fila]["tipo"] + "]").prop('checked', true);
            $("input[name=sexo][value=" + mascotas[fila]["sexo"] + "]").prop('checked', true);
            $('#trBotones').remove();
            var tr = document.createElement('tr');
            tr.setAttribute("id", "trBotones");
            var btnAceptar2 = Recursos.prototype.agregarBoton("modificar", "btn btn-secondary");
            btnAceptar2.addEventListener('click', function () {
                modificarMascota(id);
            }, false);
            var btnAceptar3 = Recursos.prototype.agregarBoton("borrar", "btn btn-danger");
            btnAceptar3.addEventListener('click', function () { eliminarMascota(id); }, false);
            var btnAceptar4 = Recursos.prototype.agregarBoton("cancelar", "btn btn-light");
            btnAceptar4.addEventListener('click', function () {
                $('#alta').empty();
                asignarManejadores();
            });
            tr.appendChild(btnAceptar2);
            tr.appendChild(btnAceptar3);
            tr.appendChild(btnAceptar4);
            $('#cargar').remove();
            $('#alta').append(tr);
            break;
        }
    }
}
/////////////// COSAS DINAMICAS
function armarListado(personas) {
    var tabla = document.createElement('table');
    tabla.setAttribute("id", "tablaListado");
    tabla.setAttribute("class", "table table-dark");
    tabla.appendChild(armarEncabezado(personas));
    tabla.appendChild(armarListadoContenidos(personas));
    return tabla;
}
/**
 *
 * @param {*} key
 * @param {*} valor
 */
function crearFormulario(key, valor) {
    var div = document.createElement('div');
    div.setAttribute('class', 'form-group center-block');
    var td = document.createElement('td');
    //cambia para adaptar
    switch (key) {
        case "nombre":
        case "edad":
        case "apellido":
        case "mail":
            var label = Recursos.prototype.agregarLabel(key, key);
            div.appendChild(label);
            div.appendChild(Recursos.prototype.agregarTextInput(key, valor));
            break;
        case "sexo":
            div.setAttribute("class", 'form-group col-8');
            div.appendChild(Recursos.prototype.agregarLabel(key, "lbl" + key));
            div.appendChild(Recursos.prototype.agregarSalto());
            div.appendChild(Recursos.prototype.agregarRadioButtons("masculino", false, valor, "sexo"));
            div.appendChild(Recursos.prototype.agregarRadioButtons("femenino", true, valor, "sexo"));
            break;
        case "tipo":
            div.setAttribute("class", 'form-group col-8');
            div.appendChild(Recursos.prototype.agregarLabel(key, "lbl" + key));
            div.appendChild(Recursos.prototype.agregarSalto());
            div.appendChild(Recursos.prototype.agregarRadioButtons("senador", false, valor, "legi"));
            div.appendChild(Recursos.prototype.agregarRadioButtons("diputado", true, valor, "legi"));
            break;
        default:
            break;
    }
    td.appendChild(div);
    return td;
}
function arrayTipoAnimales() {
    var arr = Object.keys(ETipo).map(function (k) { return ETipo[k]; });
    var arraySinNUmeros = [];
    for (var dato in arr) {
        if (isNaN(arr[dato])) {
            arraySinNUmeros.push(arr[dato]);
        }
    }
    return arraySinNUmeros;
}
/**

 */
function traerPersonas() {
    try {
        return JSON.parse(localStorage.mascotas);
    }
    catch (e) {
        mascotaVacia();
    }
}
function agregarMascota() {
    var mascotaNuevaa = new Legislador($('input[name=legi]:checked').val(), $('#nombre').val(), $('#edad').val(), $('#apellido').val(), $('input[name=sexo]:checked').val(), $('#mail').val(), localStorage.ultimoId++);
    var mascotas = JSON.parse(localStorage.mascotas);
    mascotas.push(mascotaNuevaa);
    localStorage.setItem('mascotas', JSON.stringify(mascotas));
    asignarManejadores();
}
function modificarMascota(id) {
    var mascotas = JSON.parse(localStorage.mascotas);
    for (var dato in mascotas) {
        console.log("mascotas[dato]" + mascotas[dato]['id']);
        if (mascotas[dato]['id'] == id) {
            mascotas[dato]['tipo'] = $('input[name=legi]:checked').val();
            mascotas[dato]['nombre'] = $('#nombre').val();
            mascotas[dato]['apellido'] = $('#apellido').val();
            mascotas[dato]['edad'] = $('#edad').val();
            mascotas[dato]['sexo'] = $('input[name=sexo]:checked').val();
            mascotas[dato]['mail'] = $('#mail').val();
            break;
        }
    }
    localStorage.setItem('mascotas', JSON.stringify(mascotas));
    asignarManejadores();
}
function eliminarMascota(id) {
    var mascotas = JSON.parse(localStorage.mascotas);
    for (var dato in mascotas) {
        console.log("mascotas[dato]" + mascotas[dato]['id']);
        if (mascotas[dato]['id'] == id) {
            mascotas.splice(dato, 1);
            break;
        }
    }
    localStorage.setItem('mascotas', JSON.stringify(mascotas));
    asignarManejadores();
}
