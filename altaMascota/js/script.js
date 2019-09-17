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
}