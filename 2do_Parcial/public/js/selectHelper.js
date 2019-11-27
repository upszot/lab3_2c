

function obtenerTipo(arr) {
    return arr.map(obj => obj.tipo)
        .unique()
        .sort();
}

function obtenerTransaccion(arr) {
    return arr.map(obj => obj.transaccion)
        .unique()
        .sort();
}

function cargarSelect(sel, arr) {
    limpiarSelect(sel);
    let option = document.createElement('option');
    option.value = "Todos";
    option.textContent = "Todos";
    sel.appendChild(option);
    arr.forEach(element => {
        let option = document.createElement('option');
        option.value = element;
        option.textContent = element;
        sel.appendChild(option);
    });
}

function limpiarSelect(sel) {
    sel.options.length = 0;
    // while (sel.hasChildNodes()) {
    //     sel.removeChild(sel.firstElementChild);
    // }
}

// function calcularEdad(arr) {
//     let promedio = arr.map(obj => parseInt(obj.edad))
//         .reduce((prev, curr) => (prev + curr))/arr.length;
//     //$('#txtInfoEdad').val(promedio.toFixed(2));
// }

// function calcularGenderMix(arr) {
//     let cantidadLegisladores = arr.length;
//     let cantidadMujeres = arr.filter(obj => obj.sexo === "Femenino").length;
//     let genderMix = (cantidadMujeres/cantidadLegisladores) * 100;
//     $('#txtInfoEdad').val(genderMix.toFixed(2));
// }

Array.prototype.unique = function() {
    return [...new Set(this)];
}