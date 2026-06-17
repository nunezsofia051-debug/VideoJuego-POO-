class Personaje {

    constructor(nombre, clase) {
        this.nombre = nombre;
        this.clase = clase;
        this.vida = 100;
        this.nivel = 1;
    }

    mostrarDatos() {
        console.log("Nombre: " + this.nombre);
        console.log("Clase: " + this.clase);
        console.log("Vida: " + this.vida);
        console.log("Nivel: " + this.nivel);
    }

    subirNivel() {
        this.nivel++;
        this.vida += 20;

        console.log(this.nombre + " subió al nivel " + this.nivel);
    }

}

module.exports = Personaje;