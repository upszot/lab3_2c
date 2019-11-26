class Legislador extends Persona{
    id: number;
    consulta: string;
    tipo: ETipo;

    constructor(tipo, nombre, edad, apellido, sexo, mail, id) {

        this.id = id;
        super(nombre,apellido, mail ,sexo , edad);
        this.tipo = tipo;
    }
}

