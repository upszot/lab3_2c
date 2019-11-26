var Veterinaria = /** @class */ (function () {
    function Veterinaria(veterinario) {
        this.veterinario = veterinario;
        this.mascotas = [];
    }
    Veterinaria.prototype.getTodasMascotas = function () {
        return this.mascotas;
    };
    Veterinaria.prototype.getNombreVeterinario = function () {
        return this.veterinario;
    };
    Veterinaria.prototype.agregarMascota = function (mascotaNueva) {
        this.mascotas.push(mascotaNueva);
    };
    Veterinaria.prototype.mostrarMascostas = function () {
        for (var key in this.mascotas) {
            console.log("nombre:" + this.mascotas[key].nombre + " " + this.mascotas[key].edad);
        }
    };
    return Veterinaria;
}());
