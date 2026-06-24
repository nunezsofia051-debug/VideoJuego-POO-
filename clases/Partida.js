class Partida {

    constructor(jugador, nivel) {
        this.jugador = jugador;
        this.nivel = nivel;
    }

    guardarPartida() {
        console.log("Partida guardada correctamente");
    }

    cargarPartida() {
        console.log("Cargando partida...");
    }

}

module.exports = Partida;