class Recursos
{
    getOS(): string {
        var OSName = "Unknown";
        if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSName = "Windows";
        if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName = "Windows";
        if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName = "Windows";
        if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName = "Windows Vista";
        if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName = "Windows XP";
        if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName = "Windows 2000";
        if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
        if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
        if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
    
        return OSName;
    }
    
    /**
     * 
     */
    ponerSpinner() {
        var spinner = document.createElement('img');
        spinner.setAttribute('src', 'imagenes/spinner.gif');
        spinner.setAttribute('class', 'spinner');
        spinner.setAttribute('alt', 'spinner');
        return spinner;
    }
    
    /**
     * 
     * @param {*} listadoArray 
     * @param {*} clave 
     * @param {*} value 
     */
    agregarComboBox(listadoArray, clave, value) //deberia filtrar antes de mandar asi no habria q modificar esta fucnion
    { //o pasarle la clave del dato como parametro, NOT BAD
    
        var select = document.createElement("select");
        select.setAttribute("class", "btn btn-primary dropdown-toggle ")
        select.setAttribute("id", "comboA")
   
        for (var datos in listadoArray) 
        {
            var option = document.createElement("option");
            option.value = listadoArray[datos][value];
            option.text = listadoArray[datos][clave];
            select.appendChild(option);
            }
        
        return select;
    }

    agregarComboBoxSimple(listadoArray, valor, id) //deberia filtrar antes de mandar asi no habria q modificar esta fucnion
    { //o pasarle la clave del dato como parametro, NOT BAD
    
        var select = document.createElement("select");
        select.setAttribute("class", "btn btn-secondary dropdown-toggle ");
        select.setAttribute("style", "margin: 3px ");
        select.setAttribute("id", "comboA"+id);

        var option = document.createElement("option");
        option.value = "0";
        option.text = "TODES ";
        select.appendChild(option);


        for (var datos in listadoArray) 
            {
                if(isNaN(listadoArray[datos]))
                {
                    var option = document.createElement("option");
                    option.value = listadoArray[datos];
                    option.text = listadoArray[datos];
                    if(listadoArray[datos] == valor){
                        option.selected = true;
                    }
                    select.appendChild(option);
                }
            }
        
        return select;
    }
    
    /**
     * 
     * @param {*} texto 
     * @param {*} clas 
     */
    agregarBoton(texto, clas) {
        var btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', clas);
        btn.setAttribute('value', texto);
        btn.setAttribute('id', texto);
        btn.setAttribute("style", "margin:3px");
        return btn;
    }
    
    /***
     * 
     */
    
    agregarSalto() {
        var salto = document.createElement('p');
        return salto;
    
    }
    
      
    /**
     * 
     * @param {*} key 
     */ 
    
    agregarLabel(key, id) {
        var label = document.createElement('label');
        var textLabel = document.createTextNode(key);
        label.appendChild(textLabel);
        label.setAttribute('for', key);
        label.setAttribute('id', "lbl" + key);
        label.setAttribute('class', "labelAlta text-white " + id);
        return label;
    }
    /**
     * 
     * @param {*} valor 
     * @param {*} activo 
     * @param {*} nombre 
     * @param {*} name 
     */
    agregarRadioButtons(valor, activo, nombre, name) {
        var td = document.createElement('td');
        td.setAttribute('id', "textoEtiqueta");
        td.setAttribute('class', "form-check form-check-inline");
        var input = document.createElement('input');
        input.setAttribute("type", "radio");
        input.setAttribute("name", name);
        input.setAttribute("value", valor);
        input.setAttribute("id", valor);
        if (valor == nombre) {
            input.checked = true;
        } else if (activo) {
            input.checked = true;
        }
        td.appendChild(input);
        td.appendChild(this.agregarLabel(valor, "radio-inline col-3"));
        return td;
    }
    
    /**
     * 
     * @param {*} valor 
     * @param {*} activo 
     */
    
    agregarCheckBox(valor, activo) {

        var input = document.createElement('input');
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "ck"+ valor);
        input.setAttribute("class", "checkbox col-xs-12"); 
    
        if (valor != null && activo == true) {
            input.checked = true;
        }
        if (valor == "id") {
            input.disabled = true;
        }   
        return input;
    }
    
    /**
     * 
     * 
     */
    ///////CONSTRUCTORES DE INPUT Y COSAS
    
    agregarTextInput(key, valor) {
    
        var input = document.createElement('input');
    
        input.setAttribute('type', "text");
        input.setAttribute('rowspan', '2');
        input.setAttribute('class', "form-control");
        input.setAttribute('id', key);
    
        if (key == 'id') // pasar a css
        {
            input.setAttribute("readonly", "true");
            input.setAttribute('style', ' background-color: lightskyblue');
        }
    
        if (valor != null) {
            input.setAttribute('value', valor);
        }
        
    
        return input;
    }
    
    agregarTextPass(key) {
    
        var input = document.createElement('input');
        var label = this.agregarLabel(key, "pass");
    
        input.setAttribute("type", "password");
        input.setAttribute('class', "campo");
        input.setAttribute('id', key);
    
        if (key == 'id') // pasar a css
        {
            input.setAttribute("readonly", "true");
            input.setAttribute('style', ' background-color: lightskyblue');
        }
        label.appendChild(input);
    
        return label;
    }

    cambiarColorBack() {
        var inputColor = document.getElementById('elegirColor');
        inputColor.addEventListener('change',
            function () {
                var valor = (<HTMLInputElement>document.getElementById('elegirColor')).value;
                console.log("color" + valor);
                $('body').css('background-image', 'url("null")');
                $('body').css('backgroundColor', valor);
            }
        );
    }
    
}