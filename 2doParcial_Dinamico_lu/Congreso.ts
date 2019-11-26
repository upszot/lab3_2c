class Veterinaria  {
    veterinario: string;
    mascotas: Legislador[]

    constructor(veterinario: string) {
        this.veterinario = veterinario;
        this.mascotas = [];
    }

    getTodasMascotas() {
        return this.mascotas;
    }
    getNombreVeterinario() {
        return this.veterinario;
    }

    agregarMascota(mascotaNueva: Legislador) {
        this.mascotas.push(mascotaNueva);
    }

    mostrarMascostas() {
        for (var key in this.mascotas) {
            console.log("nombre:" + this.mascotas[key].nombre + " " + this.mascotas[key].edad);

        }
    }


}