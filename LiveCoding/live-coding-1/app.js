// Creando un array
const myArray = ["hotcakes", "Cafe", "Azucar", "Hamburguesa", "Picafresa", "Raspado", "frappe", "chocolate"];
console.log(myArray); // Imprime el contenido del array

// Filtrando el array para palabras de más de 8 caracteres
let comida = myArray.filter((elemento) => elemento.length > 8);
console.log(comida); // Imprime el resultado del filtro

function printArray(array) {
    const ul = document.getElementById("Listaproductos");
    
    // Limpiando la lista antes de agregar nuevos elementos
    ul.innerHTML = "";

    // Iterando sobre el array y creando un elemento <li> para cada palabra
    array.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        ul.appendChild(li);
    });
}

// Prueba de la función printArray con un nuevo array
const mysArray = ["hotcakes", "Cafe", "Azucar", "Hamburguesa", "Picafresa", "Raspado", "frappe", "Chocolate"];
printArray(myArray);

function listaAlimentos () {
    const inputPalabra = document.getElementById ("button").Value;
    const palabras = myArray(inputPalabra);
    printArray(palabras);
}