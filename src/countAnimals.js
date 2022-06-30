const data = require('../data/zoo_data');

function countAnimals(animal) {
  const count = {};
  if (!animal) {
    data.species.forEach((specie) => {
      count[specie.name] = specie.residents.length;
    });
    return count;
  }
  if (!animal.sex) {
    return data.species.find((specie) => specie.name === animal.specie)
      .residents.length;
  }
  return data.species
    .find((specie) => specie.name === animal.specie)
    .residents.filter((specie) => specie.sex === animal.sex).length;
}

module.exports = countAnimals;
