const Personaje = require("./Clases/Personaje");
const Enemigo = require("./Clases/Enemigo");
const Inventario = require("./Clases/Inventario");
const Partida = require("./Clases/Partida");
const Tienda = require("./Clases/Tienda");
const Mision = require("./Clases/Mision");


// Crear personaje
const jugador = new Personaje("Sofia", "Maga");

jugador.mostrarDatos();

jugador.subirNivel();


// Inventario
const mochila = new Inventario();

mochila.agregarObjeto("Espada");
mochila.agregarObjeto("Poción");

mochila.mostrarInventario();


// Guardar partida
const partida1 = new Partida("Sofia", 5);

partida1.guardarPartida();


// Tienda
const tienda1 = new Tienda();

tienda1.comprarObjeto("Arco");
tienda1.comprarObjeto("Escudo");

tienda1.mostrarObjetos();


// Enemigo
const enemigo1 = new Enemigo("Orco", 100);

enemigo1.recibirDanio(40);
enemigo1.recibirDanio(30);


// Misiones
const mision1 = new Mision("Derrotar al dragón", 500);

mision1.completarMision();