/* import { example } from './data.js'; */
import data from './data/pokemon/pokemon.js';

sortData(data.pokemon);

function sortData(data) { 
    document.querySelector("#container").innerHTML="";
    for (let index = 0; index < data.length; index++) {
        const section = document.createElement("article");
        const image = document.createElement("img");
        const title = document.createElement("h1");
        section.className = "pokemon-container";
        image.className = "pokemon-image";
        title.className = "pokemon-name";
        title.textContent = data[index].name;
        image.src = data[index].img;
        section.appendChild(image);
        section.appendChild(title);
        document.querySelector("#container").appendChild(section);
    }
}

function SortOrderAZ(prop) {
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}

function SortOrderZA(prop) {
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
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

function OrdenarZA() {
    let saveData = data.pokemon.sort(SortOrderZA("name"));   
    sortData(saveData);
}