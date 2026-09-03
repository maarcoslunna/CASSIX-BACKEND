# 🛒 CASSIX - E-commerce Full-Stack

Este es mi proyecto personal para **CASSIX**, una tienda online pensada desde cero con una estética minimalista y moderna (estilo Apple), cuidando tanto el diseño visual como la lógica del servidor y la base de datos.

Quería crear una aplicación web full-stack que fuera funcional de verdad, conectando una interfaz limpia con una API REST propia y una base de datos NoSQL.

## 🛠️ Tecnologías que he usado

* **Backend:** Node.js, Express.js
* **Base de datos:** MongoDB Atlas (con Mongoose para los modelos)
* **Frontend:** HTML5, CSS3 (Variables personalizadas, Grid, Flexbox) y JavaScript nativo (Fetch API, Async/Await)
* **Estructura:** Arquitectura modular limpia separando modelos, rutas y archivos públicos.

## ✨ Características principales

* **API REST completa:** Rutas estructuradas para consultar el catálogo, registrar nuevos productos, actualizar datos y eliminar artículos (CRUD completo).
* **Control de stock en tiempo real:** Cuando un usuario hace clic en "Adquirir" desde la web, la aplicación actualiza automáticamente la base de datos restando una unidad al stock disponible.
* **Diseño Minimalista (Modo Oscuro):** Interfaz limpia en tonos negros y blancos con detalles en rojo, animaciones fluidas y transiciones cuidadas con CSS.

## 📂 Estructura del proyecto

```text
CASSIX/
├── models/
│   └── prenda.js         # Esquema de Mongoose para las prendas
├── routes/
│   └── prendas.js        # Endpoints y lógica de la API
├── public/
│   └── index.html        # Interfaz visual de la tienda (Frontend)
├── server.js             # Archivo principal que arranca el servidor y conecta MongoDB
├── package.json          # Dependencias del proyecto
└── README.md             # Documentación del proyecto