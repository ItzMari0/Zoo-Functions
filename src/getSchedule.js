const data = require('../data/zoo_data');

const week = Object.keys(data.hours);
const open = Object.values(data.hours);
const animalList = data.species.map((animals) => animals.name);

const getDaySchedule = () => week.reduce((acc, day, index) => {
  if (day === 'Monday') {
    acc[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    acc[day] = {
      officeHour: `Open from ${open[index].open}am until ${open[index].close}pm`,
      exhibition: data.species.filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    };
  }
  return acc;
}, {});

const schedule = (scheduleTarget) => ({ [scheduleTarget]: getDaySchedule()[scheduleTarget] });

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return getDaySchedule();
  }
  if (week.includes(scheduleTarget)) {
    return schedule(scheduleTarget);
  }
  if (animalList.includes(scheduleTarget)) {
    return data.species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return getDaySchedule();
}

module.exports = getSchedule;
