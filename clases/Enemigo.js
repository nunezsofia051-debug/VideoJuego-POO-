class Enemigo {

    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }

    recibirDanio(danio) {

        this.vida -= danio;

        console.log(this.nombre + " recibió " + danio + " de daño");

        if (this.vida <= 0) {
            console.log(this.nombre + " fue derrotado");
        }

    }

}

module.exports = Enemigo;