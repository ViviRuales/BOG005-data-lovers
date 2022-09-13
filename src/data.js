// import data from './data/pokemon/pokemon.js';

export function ordenarAZ(pokelist) {
    const copia = [...pokelist]
    let saveData = copia.sort(sortOrderAZ("name"));
    return saveData;
}
export function ordenarZA(pokelist) {
    const copia = [...pokelist]
    let saveData = copia.sort(sortOrderZA("name"));   
    return saveData;
}

export function sortOrderAZ(prop) {
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return 1;    
      } else if (a[prop] < b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
}

export function sortOrderZA(prop) {
  return function(a, b) {    
      if (a[prop] < b[prop]) {    
          return 1;    
      } else if (a[prop] > b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
}

export const filtrarTipo = (data, opcion) => {
    const dataFiltrada = data.filter (elemento => elemento.type.includes(opcion))
    return dataFiltrada
}
 // falta terminar uno por uno con cada uno de los case
export function calcular (dataPokemon){
    let types = {
        "fire":0,
        "water":0,
        "grass":0,
        "dark":0,
        "flying":0,
        "psychic":0,
        "fairy":0,
        "ground":0,
        "dragon":0,
        "fighting":0,
        "ice":0,
        "ghost":0, 
        "poison":0,
        "electric":0,
        "bug":0,
        "steel":0,
        "rock":0,
        "normal":0,


    }
    dataPokemon.forEach(pokemon => {
      pokemon.type.forEach(type => {
        switch (type) {
            case "fire":
                types.fire += 1;
                break;
            case "water":
                types.water += 1;   
                break;
            case "grass":
                types.grass +=1;
                break;
            case "flying":
                types.flying += 1;
                break;
            case "poison":
                types.poison += 1;
                break;
            case "steel":
                types.steel +=1;
                break;
            case "bug":
                types.bug += 1;
                break;
            case "electric":
                types.electric += 1;
                break;
            case "ice":
                types.ice += 1;
                break;
             case "normal":
                types.normal += 1;
                break;
            case "fighting":
                types.fighting += 1;
                break;
            case "ground":
                types.ground += 1;
                break;
            case "rock":
                types.rock += 1;
                break;
            case "dragon":
                types.dragon += 1;
                break;
            case "psychic":
                types.psychic += 1;
                break;
            case "ghost":
                types.ghost += 1;                
                break;
            case "fairy":
                types.fairy += 1;
                break;
            case "dark":
                types.dark += 1;
                break;
            default:
                break;
        
        }
        
      });
    });
    return types;
} 




/*sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. 
El primer parámetro, data, nos entrega los datos. 
El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. 
El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.*/
