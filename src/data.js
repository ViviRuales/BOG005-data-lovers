import data from './data/pokemon/pokemon.js';
export function ordenarAZ() {
    let saveData = data.pokemon.sort(sortOrderAZ("name"));   
   
    return saveData;
}
export function ordenarZA() {
    let saveData = data.pokemon.sort(sortOrderZA("name"));   
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
    


/*sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. 
El primer parámetro, data, nos entrega los datos. 
El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. 
El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.*/
