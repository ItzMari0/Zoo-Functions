const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(param) {
  const worker = Object.values(param)[0];
  const list = employees.find(
    ({ id: number, firstName: first, lastName: last }) => [number, first, last].includes(worker),
  );
  if (!list) {
    throw new Error('Informações inválidas');
  }
  const { id, firstName, lastName, responsibleFor: animalIds } = list;
  const specie = species.filter(({ id: animalId }) => animalIds
    .some((animal) => animal === animalId));
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: specie.map(({ name }) => name),
    locations: specie.map(({ location }) => location),
  };
}

function getEmployeesCoverage(param) {
  if (param) {
    return getSpecies(param);
  }
  return employees.reduce((acc, { id }) => [...acc, getSpecies({ id })], []);
}

module.exports = getEmployeesCoverage;
