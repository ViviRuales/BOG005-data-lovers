import {SortOrderAZ} from '../src/data.js';
let dataPrueba = [
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      
    },
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "002",
    "name": "ivysaur",
    "generation": {
      "num": "generation i",
      
    },
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "003",
    "name": "venusaur",
    "generation": {
      "num": "generation i",
     
    },
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      
    },
    "type": [
      "fire"
    ],
  },
  {
    "num": "005",
    "name": "charmeleon",
    "generation": {
      "num": "generation i",
    
    },
    "type": [
      "fire"
    ],
  },
]
describe('SortOrderAZ', () => {
  it('is a function', () => {
    expect(typeof SortOrderAZ).toBe('function');
  });

  it('Con un argumento de array de data de objetos quee tenga name, returns array de data organizada por name de la A-Z', () => {
    const resultadoAZ = [
    {
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "type": [
        "grass",
        "poison"
      ],
    },
    {
      "num": "004",
      "name": "charmander",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "type": [
        "fire"
      ],
    },
    {
      "num": "005",
      "name": "charmeleon",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "type": [
        "fire"
      ],
    },
    {
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "type": [
        "grass",
        "poison"
      ],
    },
    {
      "num": "003",
      "name": "venusaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "type": [
        "grass",
        "poison"
      ],
    },
  ]
    expect(SortOrderAZ(dataPrueba)).toEqual(resultadoAZ);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
