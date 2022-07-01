const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childNumber = entrants.filter(({ age }) => age < 18).length;
  const adultNumber = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const seniorNumber = entrants.filter(({ age }) => age >= 50).length;
  const count = { child: childNumber, adult: adultNumber, senior: seniorNumber };
  return count;
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) {
    return 0;
  }
  const countVisitor = countEntrants(entrants);
  const sum = (countVisitor.child * data.prices.child) + (
    countVisitor.adult * data.prices.adult) + (
    countVisitor.senior * data.prices.senior);
  return sum;
}

module.exports = { calculateEntry, countEntrants };
