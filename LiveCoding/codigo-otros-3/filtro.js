// Tenemos un li de productos
// Se le agrego ; a la mayoria del codigo
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./imagenes/bota-azul.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./imagenes/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./imagenes/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./imagenes/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./imagenes/zapato-rojo.jpg"}
]

const li = document.getElementsByName(".lista-de-productos"); 
const $i = document.querySelector('.input'); //Se le agrego un punto para que funcionara y hablara a la clase correctamente.

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
}

displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  