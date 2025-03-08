// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los participantes
let participantes = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validamos el nombre
    if (nombre === "" || /\d/.test(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Convertir la primera letra a mayúscula y el resto a minúscula
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    if (participantes.includes(nombre)) {
        alert("Este nombre ya fue ingresado.");
        return;
    }

    participantes.push(nombre);
    actualizarListaAmigos();
    input.value = ""; // Limpiar el input
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    participantes.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un único amigo secreto
function sortearAmigo() {
    if (participantes.length < 1) {
        alert("Debe haber al menos 1 participante para sortear.");
        return;
    }

    const amigoSecreto = participantes[Math.floor(Math.random() * participantes.length)];

    // Mostrar el resultado
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultados previos

    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}