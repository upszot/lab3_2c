let mascotas=[];

function Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento)
{
    this.nombre=nombre;
    this.edad=edad;
    this.tipo=tipo;
    this.castrado=castrado;
    this.vacunado=vacunado;
    this.desparasitado=desparasitado;
    this.alimento=alimento;

    Mascota.prototype.toString=function(){
        
         return `Hola soy $(this.nombre) y tengo $(this.edad)`;

    }
}

// let m1=new Mascota("bobby",3,"perro",true,false,true,"carne");

// console.log(m1.toString());
