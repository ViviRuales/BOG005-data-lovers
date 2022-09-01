/* import { example } from './data.js'; */
import data from './data/pokemon/pokemon.js';
import {SortOrderAZ, SortOrderZA} from './data.js';
sortData(data.pokemon)

function sortData(data) {
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

const btnOrderAZ = document.getElementById("OrdenarAZ");
btnOrderAZ.addEventListener("click", OrdenarAZ);

function OrdenarAZ() {
    let saveData = data.pokemon.sort(SortOrderAZ("name"));   
    sortData(saveData);
}

const btnOrderZA = document.getElementById("OrdenarZA");
btnOrderZA.addEventListener("click", OrdenarZA);

console.log(data);
function OrdenarZA() {
    let saveData = data.pokemon.sort(SortOrderZA("name"));   
    sortData(saveData);
} 
