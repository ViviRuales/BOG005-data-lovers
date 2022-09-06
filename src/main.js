/* import { example } from './data.js'; */
import data from './data/pokemon/pokemon.js';
import {sortOrderAZ, SortOrderZA, filtrarTipo} from './data.js';

listPokemon(data.pokemon)

function listPokemon(data) {
    document.querySelector("#container").innerHTML="";
    for (let index = 0; index < data.length; index++) {
        const section = document.createElement("article");
        const image = document.createElement("img");
        const title = document.createElement("h1");
        section.className = "pokemon-container";
        image.className = "pokemon-image";
        title.className = "pokemon-name";
        let upperCaseCharacter = data[index].name.charAt(0).toUpperCase();
        title.textContent = upperCaseCharacter + data[index].name.slice(1);
        image.src = data[index].img;
        section.appendChild(image);
        section.appendChild(title);
        document.querySelector("#container").appendChild(section);
    }
}

const dataPokemon = data.pokemon
console.log (dataPokemon)

/**
 * Filtrado
 */
//Fuego
  const tipoBtnFire = document.getElementById("fire");
 tipoBtnFire.addEventListener("click",filtradoFuego);

 function filtradoFuego() {
    let saveData = filtrarTipo(dataPokemon, "fire");   
    listPokemon(saveData);
}
//Agua
const tipoBtnWater = document.getElementById("water");
tipoBtnWater.addEventListener("click",filtradoAgua);

function filtradoAgua() {
   let saveData = filtrarTipo(dataPokemon, "water");   
   listPokemon(saveData);
}
const btnOrderAZ = document.getElementById("OrdenarAZ");
btnOrderAZ.addEventListener("click", OrdenarAZ);

function OrdenarAZ() {
    let saveData = data.pokemon.sort(sortOrderAZ("name"));   
    listPokemon(saveData);
}

const btnOrderZA = document.getElementById("OrdenarZA");
btnOrderZA.addEventListener("click", OrdenarZA);


function OrdenarZA() {
    let saveData = data.pokemon.sort(SortOrderZA("name"));   
    listPokemon(saveData);
} 

const btnAgua = document.getElementById("Agua");
btnAgua.addEventListener("click", Fuego);