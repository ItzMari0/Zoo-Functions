const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

const sortAnimalLocation = () => species.reduce((acc, animal) => {
  locations.forEach((location) => {
    if (animal.location === location) {
      acc[location].push(animal.name);
    }
  });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return sortAnimalLocation();
  }
}

console.log((getAnimalMap()));
module.exports = getAnimalMap;
