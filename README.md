# Sorteo de Amigo Secreto

Este proyecto es una aplicación interactiva desarrollada en JavaScript que permite gestionar una lista de participantes y realizar un sorteo aleatorio para seleccionar un "amigo secreto". Es una solución sencilla y eficaz para organizar eventos de intercambio de regalos de manera justa y transparente.

## Características

- Permite agregar participantes a una lista.
- Muestra dinámicamente la lista de amigos ingresados.
- Realiza un sorteo aleatorio entre los participantes.
- Proporciona retroalimentación en caso de que no haya suficientes participantes para el sorteo.

## Requisitos

Esta aplicación es completamente funcional en cualquier navegador moderno sin necesidad de dependencias adicionales. Utiliza HTML, CSS y JavaScript puro para su funcionamiento.

## Uso

1. **Agregar participantes:** Ingresa un nombre en el campo de entrada y presiona el botón correspondiente para agregarlo a la lista.
2. **Visualizar la lista de amigos:** Los nombres ingresados se mostrarán automáticamente en una lista visible en pantalla.
3. **Realizar el sorteo:** Presiona el botón de sorteo para seleccionar aleatoriamente un amigo secreto de la lista.

## Implementación

El código fuente de la aplicación es el siguiente:

```javascript
// Declaración del array para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre válido.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    renderizarAmigos();
}

// Función para mostrar la lista actualizada de amigos en la interfaz
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se requieren al menos dos participantes para realizar el sorteo.");
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto seleccionado es: ${amigoSorteado}`;
}
Contribución
Las contribuciones son bienvenidas. Si deseas mejorar esta aplicación, puedes realizar un fork del repositorio, aplicar tus modificaciones y enviar un pull request.

Licencia
Este proyecto se distribuye bajo la licencia MIT, lo que permite su libre uso, modificación y distribución respetando los términos de la licencia.

go
Copiar
Editar

Puedes copiar y pegar este contenido en tu archivo `README.md`. ¡Déjame saber si necesitas algún ajuste! 🚀





Tú dijiste:
te faltó una parte 
ChatGPT Plus
Aquí tienes el código completo del README.md, asegurándome de que no falte ninguna parte:

markdown
Copiar
Editar
# Sorteo de Amigo Secreto

Este proyecto es una aplicación interactiva desarrollada en JavaScript que permite gestionar una lista de participantes y realizar un sorteo aleatorio para seleccionar un "amigo secreto". Es una solución sencilla y eficaz para organizar eventos de intercambio de regalos de manera justa y transparente.

## Características

- Permite agregar participantes a una lista.
- Muestra dinámicamente la lista de amigos ingresados.
- Realiza un sorteo aleatorio entre los participantes.
- Proporciona retroalimentación en caso de que no haya suficientes participantes para el sorteo.

## Requisitos

Esta aplicación es completamente funcional en cualquier navegador moderno sin necesidad de dependencias adicionales. Utiliza HTML, CSS y JavaScript puro para su funcionamiento.

## Uso

1. **Agregar participantes:** Ingresa un nombre en el campo de entrada y presiona el botón correspondiente para agregarlo a la lista.
2. **Visualizar la lista de amigos:** Los nombres ingresados se mostrarán automáticamente en una lista visible en pantalla.
3. **Realizar el sorteo:** Presiona el botón de sorteo para seleccionar aleatoriamente un amigo secreto de la lista.

## Implementación

El código fuente de la aplicación es el siguiente:

```javascript
// Declaración del array para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre válido.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    renderizarAmigos();
}

// Función para mostrar la lista actualizada de amigos en la interfaz
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se requieren al menos dos participantes para realizar el sorteo.");
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto seleccionado es: ${amigoSorteado}`;
}
```

## Contribución
Las contribuciones son bienvenidas. Si deseas mejorar esta aplicación, puedes realizar un fork del repositorio, aplicar tus modificaciones y enviar un pull request.

## Licencia
Este proyecto se distribuye bajo la licencia MIT, lo que permite su libre uso, modificación y distribución respetando los términos de la licencia.
