// Arreglo para almacenar los nombres ingresados
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Obtener el campo de texto
    const nombre = inputAmigo.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    inputAmigo.value = ""; // Limpiar el campo de entrada
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar lista

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        // Botón para eliminar un nombre de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);
        btnEliminar.style.marginLeft = "10px";
        
        li.appendChild(btnEliminar);
        listaElement.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agregue al menos un nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const resultado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `
        <li style="color: #4B69FD; font-size: 24px; font-weight: bold;">
            🎉 El amigo secreto es: <strong>${resultado}</strong> 🎉
        </li>`;
}