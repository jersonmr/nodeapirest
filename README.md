# API REST con Node.js

Para el desarrollo de esta API REST se utilizaron las siguientes herramientas:
1. Node.js (Javascript para el backend)
2. Express js (Framework javascript para Node.js)
3. MongoDB (Manejador de Base de Datos)
4. Mongoose (Herramienta para conectar Node.js con MongoDB)

Para ejecutar el proyecto son necesarios los siguientes pasos:
1. Tener instalado Node.js en su Sistema Operativo
2. Clonar el repositorio desde la temrinal con el comando `git clone git@github.com:jersonmr/nodeapirest.git`
3. Acceder al directorio del proyecto y ejecutar el comando `npm install` desde una terminal
4. Tener ejecutado **MongoDB** 
5. Ejecutar en la terminal el comando `node server.js`

Al tratarse de una API REST es necesario ejecutar las pruebas con alguna herramienta que permita realizar la conexión con dicha API como por ejemplo [**Postman**](https://www.getpostman.com/)

La URL por defecto que estará escuchando el servidor es `http://localhost:3000`

Las rutas para testear la API se encuentran en el archivo `./app/routes/user.routes.js`