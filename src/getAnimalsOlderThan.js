const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.some((specie) => specie.name === animal
&& specie.residents.every((animalData) => animalData.age >= age));

module.exports = getAnimalsOlderThan;
