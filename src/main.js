/* import { example } from './data.js'; */
import data from './data/pokemon/pokemon.js';
import {sortData} from './data.js';
console.log (data.pokemon);

/*  import data from './data/pokemon/pokemon.js';  */
for (let index = 0; index < data.pokemon.length; index++) {
    const section = document.createElement("article");
    const image = document.createElement("img");
    const title = document.createElement("h1");
    section.className = "pokemon-container";
    image.className = "pokemon-image";
    title.className = "pokemon-name";
    title.textContent = data.pokemon[index].name;
    image.src = data.pokemon[index].img;
    section.appendChild(title);
    section.appendChild(image);
    document.querySelector("#container").appendChild(section);
}
const buttomOrderAZ= document.getElementById("OrdenarAZ");
buttomOrderAZ.addEventListener("onclick", function(){
    sortData(data,"name",)
/*    // sort by name
items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    } */
})


