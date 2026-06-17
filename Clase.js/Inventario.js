class Inventario {

    constructor() {
        this.objetos = [];
    }

    agregarObjeto(objeto) {
        this.objetos.push(objeto);

        console.log(objeto + " agregado al inventario");
    }

    mostrarInventario() {
        console.log(this.objetos);
    }

}

module.exports = Inventario;