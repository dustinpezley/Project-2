const { Role } = require('../models');

const roleData = [
  {
    // count 12
    name: 'Sound Technician',
    salary_rate: 'annually',
    salary: 50000.0,
  },
  {
    // count 9
    name: 'Event Coordinator',
    salary_rate: 'annually',
    salary: 65000.0,
  },
  {
    // count 6
    name: 'Manager',
    salary_rate: 'annually',
    salary: 80000.0,
  },
  {
    // count 6
    name: 'Assistant Manager',
    salary_rate: 'annually',
    salary: 65000.0,
  },
  {
    // count 9
    name: 'Producer',
    salary_rate: 'annually',
    salary: 60000.0,
  },
  {
    // count 4
    name: 'Accountant',
    salary_rate: 'annually',
    salary: 80000.0,
  },
  {
    // count 9
    name: 'Stage Manager',
    salary_rate: 'hourly',
    salary: 22.5,
  },
  {
    // count 30
    name: 'Stage Hand',
    salary_rate: 'hourly',
    salary: 18.0,
  },
  {
    // count 1
    name: 'Marketing Manager',
    salary_rate: 'annually',
    salary: 70000.0,
  },
  {
    // count 4
    name: 'Marketing Coordinator',
    salary_rate: 'annually',
    salary: 50000.0,
  },
  {
    // count 50
    name: 'Housekeeping',
    salary_rate: 'hourly',
    salary: 18.0,
  },
  {
    // count 45
    name: 'Bartender',
    salary_rate: 'hourly',
    salary: 20.0,
  },
  {
    // count 10
    name: 'Event Staff',
    salary_rate: 'Flat fee/One-time',
    salary: 5000.0,
  },
  {
    // count 27
    name: 'Security',
    salary_rate: 'hourly',
    salary: 22.5,
  },
  {
    // count 50
    name: 'Usher',
    salary_rate: 'hourly',
    salary: 15.0,
  },
  {
    // count 8
    name: 'Guest Ambassador',
    salary_rate: 'annually',
    salary: 50000.0,
  },
  {
    // count 20
    name: 'Bar Back',
    salary_rate: 'hourly',
    salary: 15.0,
  },
];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;
