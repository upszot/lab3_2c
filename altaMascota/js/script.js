var frm;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
        
    //callback = le paso una tarea a alguien que en algun momento lo va a ejecutar
    frm.addEventListener('submit', manejadorSubmit);
    
    //es lo mismo que lo de arriba
    // frm.onsubmit=function(){};
}

function manejadorSubmit(e) 
{
    e.preventDefault();
    let nuevaMascota= obtenerMascota(e.target);

    // console.log(nuevaMascota);
    mascotas.push(nuevaMascota);

    document.getElementById("divTabla").appendChild(crearTabla(mascotas));
    
    // console.log(mascotas);
}


function obtenerMascota(frm)
{
    let nombre;
    let edad;
    let tipo;
    let castrado;
    let vacunado;
    let desparasitado;
    let alimento;
    // console.log(frm.elements);

    
    //for(var elemento in frm.elements)
    
    for (elemento of frm.elements)    
    {
        switch (elemento.name) {
            case "nombre":
                nombre=elemento.value;
                break;
            case "edad":
                edad=elemento.value;
                break;
        
            case "tipo":
                if(elemento.checked)
                {
                    tipo=elemento.value;
                }
                break;
            case "castrado":                               
                castrado=elemento.checked;                
                break;
            case "desparasitado":
                desparasitado=elemento.checked;
                break;
            case "alimento":
                alimento=elemento.value;
                break;        
        }
    }
    return new Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento);
}