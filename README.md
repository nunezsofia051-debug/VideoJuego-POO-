# 🎮 Sistema de Videojuego - Programación Orientada a Objetos

## 📌 Información del Proyecto

### 👩 Integrante

* Sofia Nuñez
* Rafael Godoy
* Dylan Galvan
* Miguel Farias 

### 📚 Materia

- Alfabetizacion Digital
- Introduccion al analisis sistemico  

### 👨‍🏫 Profesor

Marciso Perez 

---

# 🕹️ Nombre del Sistema

Sistema de Videojuego RPG orientado a objetos desarrollado en JavaScript.

---

# 📖 Descripción

Este proyecto consiste en el desarrollo de un videojuego utilizando Programación Orientada a Objetos (POO) en JavaScript.

El sistema incluye funcionalidades como:

* creación de personajes,
* combate,
* inventario,
* niveles,
* tienda,
* enemigos,
* misiones,
* y guardado de partidas.

El objetivo es aplicar conceptos de:

* clases,
* objetos,
* atributos,
* métodos,
* encapsulamiento,
* y organización del código.

---

# 🧩 Entidades del Sistema

Las entidades identificadas son:

* Jugador
* Personaje
* Enemigo
* Inventario
* Objeto
* Arma
* Pociones
* Tienda
* Misión
* NPC
* Partida
* Nivel

---

# 🎮 Videojuego POO

![Personaje](imagen.png)

## Descripción
...

---

# ⚙️ Funcionalidades del Sistema

Las funcionalidades identificadas son:

* Crear personaje
* Atacar enemigos
* Guardar objetos
* Usar pociones
* Subir de nivel
* Guardar partida
* Cargar partida
* Comprar objetos
* Perseguir jugador
* Completar misiones

---

# 📚 Historias de Usuario

## US01 – Crear personaje

COMO jugador
QUIERO crear un personaje con nombre y clase
PARA comenzar mi aventura en el juego.

### Criterios de aceptación

* DADO que el jugador está en el menú principal
  CUANDO selecciona “Crear personaje”
  ENTONCES el sistema debe mostrar las opciones de creación.

* DADO que el jugador ingresó un nombre válido y eligió una clase
  CUANDO presiona “Confirmar”
  ENTONCES el personaje debe guardarse correctamente.

* DADO que el nombre está vacío
  CUANDO el jugador intenta continuar
  ENTONCES el sistema debe mostrar un mensaje de error.

---

## US02 – Sistema de combate

COMO jugador
QUIERO atacar enemigos
PARA derrotarlos y ganar experiencia.

### Criterios de aceptación

* DADO que hay un enemigo cerca
  CUANDO el jugador selecciona “Atacar”
  ENTONCES el enemigo debe perder vida.

* DADO que la vida del enemigo llega a 0
  CUANDO termina el combate
  ENTONCES el enemigo debe desaparecer y otorgar experiencia.

* DADO que el jugador no tiene vida suficiente
  CUANDO recibe daño final
  ENTONCES el personaje debe morir.

---

## US03 – Inventario

COMO jugador
QUIERO guardar objetos en un inventario
PARA utilizarlos más adelante.

### Criterios de aceptación

* DADO que el jugador recoge un objeto
  CUANDO el objeto es obtenido
  ENTONCES debe agregarse al inventario.

* DADO que el inventario está lleno
  CUANDO el jugador intenta recoger otro objeto
  ENTONCES el sistema debe impedirlo y mostrar un aviso.

* DADO que el jugador tiene una poción
  CUANDO decide usarla
  ENTONCES la vida del personaje debe aumentar.

---

## US04 – Sistema de niveles

COMO jugador
QUIERO subir de nivel
PARA mejorar las habilidades de mi personaje.

### Criterios de aceptación

* DADO que el jugador gana experiencia
  CUANDO alcanza la cantidad necesaria
  ENTONCES debe subir de nivel.

* DADO que el personaje sube de nivel
  CUANDO se actualizan sus estadísticas
  ENTONCES la vida y el daño deben aumentar.

---

## US05 – Guardar partida

COMO jugador
QUIERO guardar mi progreso
PARA continuar jugando más tarde.

### Criterios de aceptación

* DADO que el jugador está en partida
  CUANDO selecciona “Guardar”
  ENTONCES el progreso debe almacenarse.

* DADO que existe una partida guardada
  CUANDO el jugador selecciona “Cargar partida”
  ENTONCES el juego debe restaurar el progreso anterior.

---

## US06 – Tienda del juego

COMO jugador
QUIERO comprar armas y objetos
PARA mejorar mi personaje.

### Criterios de aceptación

* DADO que el jugador tiene monedas suficientes
  CUANDO compra un objeto
  ENTONCES las monedas deben descontarse y el objeto agregarse al inventario.

* DADO que el jugador no tiene monedas suficientes
  CUANDO intenta comprar un objeto
  ENTONCES el sistema debe rechazar la compra.

---

## US07 – Enemigos con inteligencia básica

COMO jugador
QUIERO que los enemigos me persigan y ataquen
PARA que el juego sea desafiante.

### Criterios de aceptación

* DADO que el jugador entra en el rango de visión del enemigo
  CUANDO el enemigo detecta al jugador
  ENTONCES debe comenzar a perseguirlo.

* DADO que el enemigo está cerca del jugador
  CUANDO puede atacar
  ENTONCES debe causar daño.

---

## US08 – Misiones

COMO jugador
QUIERO completar misiones
PARA obtener recompensas y avanzar en la historia.

### Criterios de aceptación

* DADO que el jugador acepta una misión
  CUANDO consulta el menú de misiones
  ENTONCES debe visualizar el objetivo.

* DADO que el jugador cumple el objetivo
  CUANDO vuelve con el NPC
  ENTONCES debe recibir la recompensa correspondiente.

---

# 💻 Tecnologías Utilizadas

* JavaScript
* GitHub
* Visual Studio Code

---

# 🌿 Control de Versiones

El proyecto utiliza Git y GitHub para:

* ramas,
* commits,
* pull requests,
* y trabajo colaborativo.

---
