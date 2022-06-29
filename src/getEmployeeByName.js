const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName !== 'string') {
    return {};
  }
  const findEmployee = data.employees.find((name) => employeeName === name.firstName
  || employeeName === name.lastName);
  return findEmployee;
}

module.exports = getEmployeeByName;
