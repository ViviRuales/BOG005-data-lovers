/* import { example } from './data.js'; */
import data from './data/pokemon/pokemon.js';
import {ordenarAZ, ordenarZA, filtrarTipo, calcular} from './data.js';

listPokemon(data.pokemon)

function listPokemon(data) {
    document.querySelector("#container").innerHTML="";
    for (let index = 0; index < data.length; index++) {
        const section = document.createElement("article");
        const image = document.createElement("img");
        const title = document.createElement("h1");
       // const number = document.createElement("h2");
        section.className = "pokemon-container";
        image.className = "pokemon-image";
        title.className = "pokemon-name";
      //  number.className = "pokemon-num";
        let upperCaseCharacter = data[index].name.charAt(0).toUpperCase();
        title.textContent = upperCaseCharacter + data[index].name.slice(1);
        image.src = data[index].img;
        section.appendChild(image);
        section.appendChild(title);
        //section.appendChild(number);
        document.querySelector("#container").appendChild(section);
    }
} 

const dataPokemon = data.pokemon
console.log(dataPokemon);



/*  Btns Funciones Ordenar */

const btnOrderAZ = document.getElementById("OrdenarAZ");
btnOrderAZ.addEventListener("click", function (){
   
    const orderData =  ordenarAZ(dataPokemon)
    listPokemon(orderData);
});


const btnOrderZA = document.getElementById("OrdenarZA");
btnOrderZA.addEventListener("click", function(){
    const orderData = ordenarZA(dataPokemon)
    listPokemon(orderData);
});

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

/** planta */

const tipoBtnGrass = document.getElementById("grass");
tipoBtnGrass.addEventListener("click",filtradoPlanta);

function filtradoPlanta() {
   let saveData = filtrarTipo(dataPokemon, "grass");   
   listPokemon(saveData);
}

/**electríco */
const tipoBtnElectric = document.getElementById("electric");
tipoBtnElectric.addEventListener("click",filtradoElectríco);

function filtradoElectríco() {
   let saveData = filtrarTipo(dataPokemon, "electric");   
   listPokemon(saveData);
}

/**Insecto */
const tipoBtnBug = document.getElementById("bug");
tipoBtnBug.addEventListener("click",filtradoInsecto);

function filtradoInsecto() {
   let saveData = filtrarTipo(dataPokemon, "bug");   
   listPokemon(saveData);
}

/* Hielo */

const tipoBtnIce = document.getElementById("ice");
tipoBtnIce.addEventListener("click",filtradoHielo);

function filtradoHielo() {
   let saveData = filtrarTipo(dataPokemon, "ice");   
   listPokemon(saveData);
}

/* Hada */
const tipoBtnFairy = document.getElementById("fairy");
tipoBtnFairy.addEventListener("click",filtradoHada);

function filtradoHada() {
   let saveData = filtrarTipo(dataPokemon, "fairy");   
   listPokemon(saveData);
}

/* Oscuro */
const tipoBtnDark = document.getElementById("dark");
tipoBtnDark.addEventListener("click",filtradoOscuro);

function filtradoOscuro() {
   let saveData = filtrarTipo(dataPokemon, "dark");   
   listPokemon(saveData);
}

/* Dragón */
const tipoBtnDragon = document.getElementById("dragon");
tipoBtnDragon.addEventListener("click",filtradoDragon);

function filtradoDragon() {
   let saveData = filtrarTipo(dataPokemon, "dragon");   
   listPokemon(saveData);
}

/* Lucha */
const tipoBtnFighting = document.getElementById("fighting");
tipoBtnFighting.addEventListener("click",filtradoLucha);

function filtradoLucha() {
   let saveData = filtrarTipo(dataPokemon, "fighting");   
   listPokemon(saveData);
}

/* Volador */
const tipoBtnFlying = document.getElementById("flying");
tipoBtnFlying.addEventListener("click",filtradoVolador);

function filtradoVolador(){
    let saveData = filtrarTipo(dataPokemon, "flying");
    listPokemon(saveData);
}

/* Fantasma */
const tipoBtnGhost = document.getElementById("ghost");
tipoBtnGhost.addEventListener("click",filtradoFantasma);

function filtradoFantasma(){
    let saveData = filtrarTipo(dataPokemon, "ghost");
    listPokemon(saveData);
}

/* Tierra */
const tipoBtnGround = document.getElementById("ground");
tipoBtnGround.addEventListener("click",filtradoTierra);

function filtradoTierra(){
    let saveData = filtrarTipo(dataPokemon, "ground");
    listPokemon(saveData);
}

/* Normal */
const tipoBtnNormal = document.getElementById("normal");
tipoBtnNormal.addEventListener("click",filtradoNormal);

function filtradoNormal(){
    let saveData = filtrarTipo(dataPokemon, "normal");
    listPokemon(saveData);
}

/* Veneno */
const tipoBtnPoison = document.getElementById("poison");
tipoBtnPoison.addEventListener("click",filtradoVeneno);

function filtradoVeneno(){
    let saveData = filtrarTipo(dataPokemon, "poison");
    listPokemon(saveData);
}

/* Psíquico */
const tipoBtnPsychic = document.getElementById("psychic");
tipoBtnPsychic.addEventListener("click",filtradoPsiquico);

function filtradoPsiquico(){
    let saveData = filtrarTipo(dataPokemon, "psychic");
    listPokemon(saveData);
}

/* Roca */
const tipoBtnRock = document.getElementById("rock");
tipoBtnRock.addEventListener("click",filtradoRoca);

function filtradoRoca(){
    let saveData = filtrarTipo(dataPokemon, "rock");
    listPokemon(saveData);
}

/* Acero */
const tipoBtnSteel = document.getElementById("steel");
tipoBtnSteel.addEventListener("click",filtradoAcero);

function filtradoAcero(){
    let saveData = filtrarTipo(dataPokemon, "steel");
    listPokemon(saveData);
}

//botóncuriosidad (calculo)
const pokeCuriosidad = document.getElementById("curiosidades");
pokeCuriosidad.addEventListener("click", function(){
    document.getElementById('modalCuriosidades').style.visibility = "visible";
    let types = calcular(dataPokemon);
    document.getElementById('groundType').innerText = types.ground;
    document.getElementById('fireType').innerText = types.fire;
    document.getElementById('waterType').innerText = types.water;
    document.getElementById('flyingType').innerText = types.flying;
    document.getElementById('normalType').innerText = types.normal;
    document.getElementById('psychicType').innerText = types.psychic;
    document.getElementById('grassType').innerText = types.grass;
    document.getElementById('electricType').innerText = types.electric;
    document.getElementById('bugType').innerText = types.bug;
    document.getElementById('iceType').innerText = types.ice;
    document.getElementById('fairyType').innerText = types.fairy;
    document.getElementById('darkType').innerText = types.dark;
    document.getElementById('dragonType').innerText = types.dragon;
    document.getElementById('fightingType').innerText = types.fighting;
    document.getElementById('ghostType').innerText = types.ghost;
    document.getElementById('poisonType').innerText = types.poison;
    document.getElementById('rockType').innerText = types.rock;
    document.getElementById('steelType').innerText = types.steel;
});

const closeModal = document.getElementById('buttonClose');
closeModal.addEventListener('click', function() {
    document.getElementById('modalCuriosidades').style.visibility = "hidden";
})