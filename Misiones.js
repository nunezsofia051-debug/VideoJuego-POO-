class Mision {
    constructor(id, titulo, objetivo, recompensaExp, recompensaMonedas) {
        this.id = id;
        this.titulo = titulo;
        this.objetivo = objetivo;
        this.recompensaExp = recompensaExp;
        this.recompensaMonedas = recompensaMonedas;
        this.completada = false;
    }
}

class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
        this.experiencia = 0;
        this.monedas = 0;
        this.misionesActivas = [];
    }

    // El jugador acepta una misión
    aceptarMision(mision) {
        this.misionesActivas.push(mision);
        console.log(`📜 ¡Nueva misión aceptada por ${this.nombre}: "${mision.titulo}"!`);
    }

    // Criterio 1: DADO que acepta una misión CUANDO consulta el menú ENTONCES visualiza el objetivo
    consultarMenuMisiones() {
        console.log(`\n--- 📋 MENÚ DE MISIONES DE ${this.nombre.toUpperCase()} ---`);
        if (this.misionesActivas.length === 0) {
            console.log("No tenés misiones activas en este momento.");
            return;
        }
        this.misionesActivas.forEach(mision => {
            const estado = mision.completada ? "✅ Listo para entregar" : "⏳ En progreso";
            console.log(`🔹 [${mision.titulo}] - Objetivo: ${mision.objetivo} (${estado})`);
        });
        console.log("-------------------------------------------\n");
    }

    // Criterio 2: DADO que cumple el objetivo CUANDO vuelve con el NPC ENTONCES recibe recompensa
    entregarMisionANPC(idMision) {
        const indice = this.misionesActivas.findIndex(m => m.id === idMision);

        if (indice === -1) {
            console.log("❌ No tenés esa misión en tu registro.");
            return;
        }

        const mision = this.misionesActivas[indice];

        if (!mision.completada) {
            console.log(`🗣️ NPC: "Aún no has cumplido el objetivo de '${mision.titulo}'. ¡Vuelve cuando termines!"`);
            return;
        }

        // Se elimina de las activas y se entregan los premios
        this.misionesActivas.splice(indice, 1);
        this.experiencia += mision.recompensaExp;
        this.monedas += mision.recompensaMonedas;

        console.log(`🎉 ¡Misión "${mision.titulo}" entregada con éxito!`);
        console.log(`💰 Recompensas recibidas: +${mision.recompensaExp} EXP | +${mision.recompensaMonedas} Monedas.`);
        console.log(`📊 Estado actual de ${this.nombre}: ${this.experiencia} EXP | ${this.monedas} Monedas.`);
    }
}

// --- Simulación del Juego ---
// 1. Creamos al héroe
const heroe = new Personaje("Arturo");

// 2. Creamos una misión inicial
const misionOgro = new Mision(101, "El Terror del Bosque", "Derrotar al Ogro que bloquea el puente", 50, 100);

console.log("--- INICIO DE LA AVENTURA ---");

// El jugador acepta la misión
heroe.aceptarMision(misionOgro);

// Criterio 1: El jugador revisa qué tiene que hacer
heroe.consultarMenuMisiones();

// Intenta entregarla sin cumplirla
console.log("🏃 Arturo vuelve con el NPC rápido...");
heroe.entregarMisionANPC(101);

// El jugador cumple el objetivo en el mundo del juego
console.log("\n⚔️ [Simulación] Arturo derrota al Ogro...");
misionOgro.completada = true; 

// Revisa el menú y ve el cambio de estado
heroe.consultarMenuMisiones();

// Criterio 2: Vuelve con el NPC y cobra la recompensa
console.log("🏃 Arturo vuelve a hablar con el NPC...");
heroe.entregarMisionANPC(101);

