class Tienda {

    constructor() {
        this.objetos = [];
    }

    comprarObjeto(objeto) {
        this.objetos.push(objeto);
        console.log(objeto + " comprado correctamente");
    }

    mostrarObjetos() {
        console.log(this.objetos);
    }

}

module.exports = Tienda;