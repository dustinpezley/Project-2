const seedVenues = require('./venue-seeds');
const seedRoles = require('./role-seeds');
const seedEmployees = require('./employee-seeds');
const seedUsers = require('./user-seeds');
const seedTalent = require('./talent-seeds');
const seedShows = require('./shows-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedVenues();
  console.log('\n----- VENUES SEEDED -----\n');
  await seedRoles();
  console.log('\n----- ROLES SEEDED -----\n');
  await seedEmployees();
  console.log('\n----- EMPLOYEES SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedTalent();
  console.log('\n----- TALENT SEEDED -----\n');
  await seedShows();
  console.log('\n----- SHOWS SEEDED -----\n');

  process.exit(0);
};

seedAll();
