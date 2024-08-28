# **The Seven Deadly Sins - Gestión de Personajes**

Este proyecto es una aplicación web sencilla para gestionar los personajes de la serie "The Seven Deadly Sins". Permite crear, editar y eliminar personajes, así como visualizar una lista de personajes existentes. La aplicación interactúa con un backend simulado utilizando `json-server`.

## **Características**

- **Visualización**: Lista los personajes con su nombre, género y raza.
- **Creación**: Permite añadir nuevos personajes a la lista.
- **Edición**: Posibilidad de editar los datos de personajes existentes.
- **Eliminación**: Los personajes pueden ser eliminados de la lista.
- **Interfaz dinámica**: La tabla se actualiza automáticamente después de cada operación (crear, editar, eliminar).

## **Requisitos**

- Node.js instalado en tu sistema.
- `json-server` instalado globalmente o en el proyecto.

## **Instalación y Configuración**

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/Rada749/Lista-SevenDeadlySins.git
    ```

2. **Instala `json-server`** (si no lo tienes instalado):

    ```bash
    npm install -g json-server
    ```

3. **Navega a la carpeta del proyecto**:

    ```bash
    cd lista-sevendeadlysins
    ```

4. **Inicia el servidor JSON**:

    ```bash
    npm run api
    ```

    Esto lanzará un servidor local en `http://localhost:3000` y usará el archivo `db.json` como base de datos.

5. **Abre `index.html` en tu navegador**:
    - Simplemente abre el archivo `index.html` en tu navegador preferido.

## **Estructura del Proyecto**

- **`index.html`**: Contiene la estructura HTML principal de la aplicación.
- **`src/styles.css`**: Archivo CSS para los estilos de la aplicación.
- **`src/services.js`**: Contiene la lógica JavaScript para interactuar con el backend y manejar la interfaz de usuario.
- **`db.json`**: Archivo JSON que simula una base de datos de personajes usando `json-server`.

## **Uso**

### **Visualización de Personajes**

- Al cargar la página, se mostrará una tabla con los personajes actuales en la base de datos.

### **Añadir un Personaje**

1. Haz clic en el botón `+` en la esquina superior derecha de la tabla.
2. Se abrirá un formulario donde podrás ingresar el nombre, género y raza del nuevo personaje.
3. Haz clic en "Añadir" para guardar el personaje.

### **Editar un Personaje**

1. Haz clic en el ícono de lápiz (`✏️`) junto al personaje que deseas editar.
2. Se abrirá un formulario con los datos actuales del personaje.
3. Modifica los datos y haz clic en "Editar" para guardar los cambios.

### **Eliminar un Personaje**

- Haz clic en el botón "Eliminar" (`Eliminar`) junto al personaje que deseas borrar.

## **Tecnologías Utilizadas**

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"> <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">

  