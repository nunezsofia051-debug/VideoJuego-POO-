const Personaje = require("./clases/Personaje");
const Inventario = require("./clases/Inventario");

const jugador = new Personaje("Sofia", "Maga");

jugador.mostrarDatos();

jugador.subirNivel();

const mochila = new Inventario();

mochila.agregarObjeto("Espada");
mochila.agregarObjeto("Poción");

mochila.mostrarInventario();