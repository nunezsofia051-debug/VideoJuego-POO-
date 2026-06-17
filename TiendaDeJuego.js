class Tienda {

    constructor(monedas) {
        this.monedas = monedas;
        this.inventario = [];
    }

    comprarObjeto(objeto, precio) {

        if (this.monedas >= precio) {

            this.monedas -= precio;
            this.inventario.push(objeto);

            console.log("Compraste: " + objeto);
            console.log("Monedas restantes: " + this.monedas);

        } else {

            console.log("No tienes monedas suficientes.");

        }

    }

    mostrarInventario() {
        console.log("Inventario:", this.inventario);
    }

}

const tienda1 = new Tienda(500);

tienda1.comprarObjeto("Espada Legendaria", 300);
tienda1.comprarObjeto("Poción", 100);
tienda1.comprarObjeto("Escudo", 200);

tienda1.mostrarInventario();