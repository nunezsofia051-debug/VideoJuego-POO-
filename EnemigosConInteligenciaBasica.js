class Personaje {
    constructor(nombre, x, y, vida) {
        this.nombre = nombre;
        this.x = x;
        this.y = y;
        this.vida = vida;
    }

    recibirDanio(cantidad) {
        this.vida = Math.max(0, this.vida - cantidad);
        console.log(`💥 ${this.nombre} recibió ${cantidad} de daño. Vida restante: ${this.vida}`);
        if (this.vida === 0) {
            console.log(`💀 ${this.nombre} ha muerto.`);
        }
    }
}

class Enemigo {
    constructor(tipo, x, y, danio, rangoVision, rangoAtaque) {
        this.tipo = tipo;
        this.x = x;
        this.y = y;
        this.danio = danio;
        this.rangoVision = rangoVision;
        this.rangoAtaque = rangoAtaque;
        this.velocidad = 1.0;
    }

    calcularDistancia(jugador) {
        // Fórmula de distancia euclidiana entre dos puntos (X, Y)
        return Math.sqrt(Math.pow(jugador.x - this.x, 2) + Math.pow(jugador.y - this.y, 2));
    }

    actualizarIA(jugador) {
        const distancia = this.calcularDistancia(jugador);
        console.log(`\n🔍 [IA] Distancia actual entre ${this.tipo} y ${jugador.nombre}: ${distancia.toFixed(2)} metros.`);

        // Criterio 1: DADO que entra en rango de visión CUANDO detecta ENTONCES persigue
        if (distancia <= this.rangoVision && distancia > this.rangoAtaque) {
            console.log(`👀 ¡El ${this.tipo} detectó a ${jugador.nombre}! Comenzando persecución...`);
            this.perseguir(jugador);
        } 
        // Criterio 2: DADO que está cerca CUANDO puede atacar ENTONCES causa daño
        else if (distancia <= this.rangoAtaque) {
            console.log(`⚔️ ¡El ${this.tipo} está lo suficientemente cerca para atacar!`);
            this.atacar(jugador);
        } 
        else {
            console.log(`💤 El ${this.tipo} está patrullando en calma. Jugador fuera de rango.`);
        }
    }

    perseguir(jugador) {
        // Mueve al enemigo un paso en dirección al jugador
        if (this.x < jugador.x) this.x += this.velocidad;
        else if (this.x > jugador.x) this.x -= this.velocidad;

        if (this.y < jugador.y) this.y += this.velocidad;
        else if (this.y > jugador.y) this.y -= this.velocidad;

        console.log(`🏃 El ${this.tipo} se movió a la posición (${this.x}, ${this.y}).`);
    }

    atacar(jugador) {
        console.log(`🦖 El ${this.tipo} lanza un zarpazo.`);
        jugador.recibirDanio(this.danio);
    }
}

// --- Simulación del Juego ---
// Creamos un Guerrero en la posición (0, 0)
const heroe = new Personaje("Arturo", 0.0, 0.0, 100);

// Creamos un Orco lejos, en la posición (6, 6) con rango de visión 8 y ataque 1.5
const orco = new Enemigo("Orco", 6.0, 6.0, 15, 8.0, 1.5);

console.log("--- INICIO DE LA SIMULACIÓN ---");

// Turno 1: El enemigo lo detecta y empieza a caminar hacia él
orco.actualizarIA(heroe);

// Forzamos un acercamiento del enemigo simulando varios pasos de persecución
orco.x = 1.0;
orco.y = 1.0;

// Turno 2: Ya se acercó lo suficiente para entrar en rango de ataque
orco.actualizarIA(heroe);

