
// Ejercicio 1: Recorrer arreglo simple de videojuegos
const videogames = [
  "nier automata", 
  "Kingdom Hearts", 
  "nier replican", 
  "Final Fantasy", 
  "Chrono Trigger"
];
const lista1 = document.getElementById("lista1");

for (const game of videogames) {
  // Condición: solo procesa elementos cuyo nombre tenga más de 12 caracteres
  if (game.length > 12) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${game}</span>`;
    lista1.appendChild(li);
  }
}

const videogame = {
  empresa: "Square Enix",
  grado: "M",
};
const lista2 = document.getElementById("lista2");

for (const [clave, valor] of Object.entries(videogame)) {
  const li = document.createElement("li");
  li.innerHTML = `<span>${clave}: ${valor}</span>`;
  lista2.appendChild(li);
}

// Ejercicio 3: Recorrer arreglo de objetos
const continente = [
  { nombre: "asia", pais: "japon" },
  { nombre: "america", pais: "estados unidos" },
  { nombre: "europa", pais: "españa" }
];
const lista3 = document.getElementById("lista3");

for (const item of continente) {
  const li = document.createElement("li");
  li.innerHTML = `<span>${item.pais} - ${item.nombre}</span>`;
  lista3.appendChild(li);
}