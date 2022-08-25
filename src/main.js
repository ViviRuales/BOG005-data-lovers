/* import { example } from './data.js'; */
import data from './data/pokemon/pokemon.js';

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

console.log(data);
