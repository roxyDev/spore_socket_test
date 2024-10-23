# spore_socket_test

a [Socket IO](https://socket.io/) application

# Visualización de Vehículos en Tiempo Real

¡Bienvenido al proyecto de Visualización de Vehículos en Tiempo Real! Este es el socket que esta activamente escuchando los cambios en la base de datos para mandarlos al front end.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (incluye npm)
- [Git](https://git-scm.com/)

## Instalación

Para clonar el repositorio y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/roxyDev/spore_socket_test.git
    cd mi-repo
    ```

2. Inicializa el proyecto:

    ```bash
    git init
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Configura el archivo de base de datos
   Ingresa al archivo server.js de tu proyecto y personaliza la conexión a la base de datos:
   Ejemplo:

  ```bash
   const connection = mysql.createConnection({
      host: 'localhost',
      user: 'usuario',
      password: 'contraseña',
      database: 'nombrebd'
    });

   ```


## Ejecución

Para ejecutar el proyecto, utiliza el siguiente comando en bash:

```bash
 node server.js
```
Listo, ahora el socket esta escuchando en el puerto 3000!!
