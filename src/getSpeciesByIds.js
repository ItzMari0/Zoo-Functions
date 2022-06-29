const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const getSpecies = data.species.filter((specie) => ids.includes(specie.id));
  return getSpecies;
}

module.exports = getSpeciesByIds;
