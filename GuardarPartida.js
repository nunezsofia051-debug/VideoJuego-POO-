class Partida {

    constructor(jugador, nivel) {
        this.jugador = jugador;
        this.nivel = nivel;
    }

    guardarPartida() {
        console.log("Partida guardada correctamente.");
        console.log("Jugador:", this.jugador);
        console.log("Nivel:", this.nivel);
        partida1.mostrarEstado();
    }

    cargarPartida() {
        console.log("Cargando partida guardada...");
        console.log("Bienvenido nuevamente " + this.jugador);
    }

}

const partida1 = new Partida("Sofia", 10);

partida1.guardarPartida();
partida1.cargarPartida();