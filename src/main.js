/* import { example } from './data.js'; */
import data from './data/pokemon/pokemon.js';
<<<<<<< HEAD
console.log (data.pokemon);
=======

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
>>>>>>> 0a5bab938edb693e31be6afb6c4e69c7cebfcb41

console.log(data);
