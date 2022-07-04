const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

const getAnimalLocation = () => species.reduce((acc, animal) => {
  locations.forEach((location) => {
    if (animal.location === location) {
      acc[location].push(animal.name);
    }
  });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalNames(animals) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.reduce((acc, cur) => {
    acc.push(cur.name);
    return acc;
  }, []);
  return animalNames;
}

function getAnimalNamesSorted(animals) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.reduce((acc, cur) => {
    acc.push(cur.name);
    return acc.sort();
  }, []);
  return animalNames;
}

function getAnimalGender(animals, gender) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.filter((animal) => animal.sex === gender)
    .reduce((acc, cur) => {
      acc.push(cur.name);
      return acc;
    }, []);
  return animalNames;
}

function getAnimalGenderSorted(animals, gender) {
  const animalNames = {};
  animalNames[animals.name] = animals.residents.filter((animal) => animal.sex === gender)
    .reduce((acc, cur) => {
      acc.push(cur.name);
      return acc.sort();
    }, []);
  return animalNames;
}

const getAnimals = (callback, gender) => data.species.reduce((acc, animals) => {
  acc[animals.location].push(callback(animals, gender));
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const sorting = (options) => {
  const { sex, sorted } = options;
  if (sex && sorted) return getAnimals(getAnimalGenderSorted, options.sex);
  if (sorted) return getAnimals(getAnimalNamesSorted);
  if (sex) return getAnimals(getAnimalGender, options.sex);
  return getAnimals(getAnimalNames);
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return getAnimalLocation();
  }
  return sorting(options);
}

module.exports = getAnimalMap;
