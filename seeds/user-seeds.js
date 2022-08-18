const bcrypt = require('bcrypt');
const { User } = require('../models');

const userData = [
  {
    username: 'simeonhancock',
    email: 'simeonhancock@polyrhythm.com',
    password: bcrypt.hashSync('userpassword13', 10),
    employee_id: 13,
    admin: 1,
  },
  {
    username: 'kayliebenson',
    email: 'kayliebenson@polyrhythm.com',
    password: bcrypt.hashSync('userpassword14', 10),
    employee_id: 14,
    admin: 1,
  },
  {
    username: 'kaleyhuff',
    email: 'kaleyhuff@polyrhythm.com',
    password: bcrypt.hashSync('userpassword15', 10),
    employee_id: 15,
    admin: 1,
  },
  {
    username: 'jairobates',
    email: 'jairobates@polyrhythm.com',
    password: bcrypt.hashSync('userpassword16', 10),
    employee_id: 16,
    admin: 1,
  },
  {
    username: 'landynpeters',
    email: 'landynpeters@polyrhythm.com',
    password: bcrypt.hashSync('userpassword17', 10),
    employee_id: 17,
    admin: 1,
  },
  {
    username: 'willwashington',
    email: 'willwashington@polyrhythm.com',
    password: bcrypt.hashSync('userpassword18', 10),
    employee_id: 18,
    admin: 1,
  },
  {
    username: 'maximilianrichards',
    email: 'maximilianrichards@polyrhythm.com',
    password: bcrypt.hashSync('userpassword19', 10),
    employee_id: 19,
    admin: 1,
  },
  {
    username: 'courtneyowens',
    email: 'courtneyowens@polyrhythm.com',
    password: bcrypt.hashSync('userpassword20', 10),
    employee_id: 20,
    admin: 1,
  },
  {
    username: 'santinodougherty',
    email: 'santinodougherty@polyrhythm.com',
    password: bcrypt.hashSync('userpassword21', 10),
    employee_id: 21,
    admin: 1,
  },
  {
    username: 'natashabest',
    email: 'natashabest@polyrhythm.com',
    password: bcrypt.hashSync('userpassword22', 10),
    employee_id: 22,
    admin: 1,
  },
  {
    username: 'kaleycarrillo',
    email: 'kaleycarrillo@polyrhythm.com',
    password: bcrypt.hashSync('userpassword23', 10),
    employee_id: 23,
    admin: 1,
  },
  {
    username: 'jasleneguzman',
    email: 'jasleneguzman@polyrhythm.com',
    password: bcrypt.hashSync('userpassword24', 10),
    employee_id: 24,
    admin: 1,
  },
  {
    username: 'jaxluna',
    email: 'jaxluna@polyrhythm.com',
    password: bcrypt.hashSync('userpassword25', 10),
    employee_id: 25,
    admin: 1,
  },
  {
    username: 'tobiasayala',
    email: 'tobiasayala@polyrhythm.com',
    password: bcrypt.hashSync('userpassword26', 10),
    employee_id: 26,
    admin: 1,
  },
  {
    username: 'denisezavala',
    email: 'denisezavala@polyrhythm.com',
    password: bcrypt.hashSync('userpassword27', 10),
    employee_id: 27,
    admin: 1,
  },
  {
    username: 'miaholt',
    email: 'miaholt@polyrhythm.com',
    password: bcrypt.hashSync('userpassword86', 10),
    employee_id: 86,
    admin: 1,
  },
  {
    username: 'amariscarey',
    email: 'amariscarey@polyrhythm.com',
    password: bcrypt.hashSync('userpassword87', 10),
    employee_id: 87,
    admin: 1,
  },
  {
    username: 'finndodson',
    email: 'finndodson@polyrhythm.com',
    password: bcrypt.hashSync('userpassword88', 10),
    employee_id: 88,
    admin: 1,
  },
  {
    username: 'rubengood',
    email: 'rubengood@polyrhythm.com',
    password: bcrypt.hashSync('userpassword89', 10),
    employee_id: 89,
    admin: 1,
  },
  {
    username: 'moiseslester',
    email: 'moiseslester@polyrhythm.com',
    password: bcrypt.hashSync('userpassword90', 10),
    employee_id: 90,
    admin: 1,
  },
  {
    username: 'jordincantu',
    email: 'jordincantu@polyrhythm.com',
    password: bcrypt.hashSync('userpassword273', 10),
    employee_id: 273,
    admin: 1,
  },
  {
    username: 'princessjackson',
    email: 'princessjackson@polyrhythm.com',
    password: bcrypt.hashSync('userpassword274', 10),
    employee_id: 274,
    admin: 1,
  },
  {
    username: 'makenziemadden',
    email: 'makenziemadden@polyrhythm.com',
    password: bcrypt.hashSync('userpassword275', 10),
    employee_id: 275,
    admin: 1,
  },
  {
    username: 'mattiecombs',
    email: 'mattiecombs@polyrhythm.com',
    password: bcrypt.hashSync('userpassword276', 10),
    employee_id: 276,
    admin: 1,
  },
  {
    username: 'addisyngarcia',
    email: 'addisyngarcia@polyrhythm.com',
    password: bcrypt.hashSync('userpassword277', 10),
    employee_id: 277,
    admin: 1,
  },
  {
    username: 'jamyashah',
    email: 'jamyashah@polyrhythm.com',
    password: bcrypt.hashSync('userpassword278', 10),
    employee_id: 278,
    admin: 1,
  },
  {
    username: 'frankiespencer',
    email: 'frankiespencer@polyrhythm.com',
    password: bcrypt.hashSync('userpassword279', 10),
    employee_id: 279,
    admin: 1,
  },
  {
    username: 'shawnweeks',
    email: 'shawnweeks@polyrhythm.com',
    password: bcrypt.hashSync('userpassword280', 10),
    employee_id: 280,
    admin: 1,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
