const Personaje = require("./clases/Personaje");
const Inventario = require("./clases/Inventario");

const jugador = new Personaje("Sofia", "Maga");

jugador.mostrarDatos();

jugador.subirNivel();

const mochila = new Inventario();

mochila.agregarObjeto("Espada");
mochila.agregarObjeto("Poción");

mochila.mostrarInventario();

const Partida = require("./Clase.js/Partida");
const Tienda = require("./Clase.js/Tienda");

const partida1 = new Partida("Sofia", 5);

partida1.guardarPartida();

const tienda1 = new Tienda();

tienda1.comprarObjeto("Arco");
tienda1.comprarObjeto("Escudo");

tienda1.mostrarObjetos();