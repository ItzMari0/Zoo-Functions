const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const manager = [stephanieId, olaId, burlId];

const isManager = (id) => manager.includes(id);

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employee = data.employees
    .filter((employeeData) => employeeData.managers.includes(managerId))
    .map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
  return employee;
}

module.exports = { isManager, getRelatedEmployees };
