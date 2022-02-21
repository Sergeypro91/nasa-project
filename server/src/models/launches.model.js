const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler exploration X',
  rocket: ' Explorere IS1',
  launchDate: new Date('Decemver 27, 2030'),
  destination: 'Kepler-444 A b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = { getAllLaunches };
