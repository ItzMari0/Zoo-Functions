const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpecies = (param) => employees
  .filter((employee) => employee.id === Object.values(param)[0])
  .map((employee) => employee.responsibleFor)[0];

function getEmployeesCoverage(param) {
  if (employees.filter((employee) =>
    employee.id === Object.values(param)[0]
    || employee.firstName === Object.values(param)[0]
    || employee.lastName === Object.values(param)[0])) {
    return {
      id: Object.values(param)[0],
      fullName: employees
        .filter((employee) => employee.id === Object.values(param)[0])
        .map((employee) => `${employee.firstName} ${employee.lastName}`)[0],
      species: getSpecies(param),
      locations: species.filter((animal) => getSpecies(param).includes(animal.name)
      || getSpecies(param).includes(animal.id)).map((animal) => animal.location),
    };
  }
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
