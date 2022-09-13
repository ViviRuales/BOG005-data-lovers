import { ordenarAZ, ordenarZA, filtrarTipo, calcular } from '../src/data'

let dataPrueba = [
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      num: "generation i",
    },
    type: ["grass", "poison"],
  },
  {
    num: "001",
    name: "bulbasaur",
    generation: {
      num: "generation i",
    },
    type: ["grass", "poison"],
  },
  {
    num: "002",
    name: "ivysaur",
    generation: {
      num: "generation i",
    },
    type: ["grass", "poison"],
  },
  {
    num: "003",
    name: "venusaur",
    generation: {
      num: "generation i",
    },
    type: ["grass", "poison"],
  },
  {
    num: "004",
    name: "charmander",
    generation: {
      num: "generation i",
    },
    type: ["fire"],
  },
  {
    num: "005",
    name: "charmeleon",
    generation: {
      num: "generation i",
    },
    type: ["fire"],
  },
];
/* test funciones ordenar AZ y ZA */
describe("sortOrderAZ", () => {
  it("Con un argumento de array de data de objetos quee tenga name, returns array de data organizada por name de la A-Z", () => {
    const resultadoAZ = [
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
      {
        num: "004",
        name: "charmander",
        generation: {
          num: "generation i",
        },
        type: ["fire"],
      },
      {
        num: "005",
        name: "charmeleon",
        generation: {
          num: "generation i",
        },
        type: ["fire"],
      },
      {
        num: "002",
        name: "ivysaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
      {
        num: "003",
        name: "venusaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
    ];
    const result = ordenarAZ(dataPrueba);

    expect(result).toEqual(resultadoAZ);

  });
});

describe("sortOrderZA", () => {
  it("Con un argumento de array de data de objetos quee tenga name, returns array de data organizada por name de la Z-A", () => {
    const resultadoZA = [
      {
        num: "003",
        name: "venusaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
      {
        num: "002",
        name: "ivysaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
      {
        num: "005",
        name: "charmeleon",
        generation: {
          num: "generation i",
        },
        type: ["fire"],
      },
      {
        num: "004",
        name: "charmander",
        generation: {
          num: "generation i",
        },
        type: ["fire"],
      },
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
      {
        num: "001",
        name: "bulbasaur",
        generation: {
          num: "generation i",
        },
        type: ["grass", "poison"],
      },
    ];
    const result = ordenarZA(dataPrueba);

    expect(result).toEqual(resultadoZA);

  });
});

describe("functionfiltrarTipo", () => {
  it("Recibe unarray de pokemón y un string del tipo y retorna un array con los Pokemón del filtro", () => {
    const result = [
      {
        num: "004",
        name: "charmander",
        generation: {
          num: "generation i",
        },
        type: ["fire"],
      },
      {
        num: "005",
        name: "charmeleon",
        generation: {
          num: "generation i",
        },
        type: ["fire"],
      },
    ]
    expect(filtrarTipo(dataPrueba, "fire")).toEqual(result);
  })
}),

  /* Pruebas funcion ´"computo"(calcular) */

  describe("funcionCalcular", () => {
    it("recibe un array pokelist y calcula la cantidad de cada tipo", () => {
      const argumentoCalcular = [
        {type: ["grass", "poison"]},
        {type: ["fire", "water"]},
        {type: ["dark", "flying"]},
        {type: ["psychic", "fairy"]},
        {type: ["ground", "dragon"]},
        {type: ["ice", "fighting"]},
        {type: ["ghost", "electric"]},
        {type: ["steel", "bug"]},
        {type: ["rock", "normal", "otro"]},
        
      ]

      const resultadoCalculo = {
        "fire": 1,
        "water": 1,
        "grass": 1,
        "dark": 1,
        "flying": 1,
        "psychic": 1,
        "fairy": 1,
        "ground": 1,
        "dragon": 1,
        "fighting": 1,
        "ice": 1,
        "ghost": 1,
        "poison": 1,
        "electric": 1,
        "bug": 1,
        "steel": 1,
        "rock": 1,
        "normal": 1,
      }
      //arrange
      expect(calcular(argumentoCalcular)).toEqual(resultadoCalculo)
    })
  });
  /* spread operator */
