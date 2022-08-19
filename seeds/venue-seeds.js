const { Venue } = require('../models');

const venueData = [
  {
    name: 'Dolce',
    address: '2036 Hawks Nest Lane, Saint Louis, MO 63104',
    capacity: 400,
  },
  {
    name: 'Modular',
    address: '2120 Reel Avenue, Saint Louis, MO 63104',
    capacity: 1200,
  },
  {
    name: 'Harmony',
    address: '967 Rhapsody Street, St. Louis, MO 63104',
    capacity: 3000,
  },
];

const seedVenues = () => Venue.bulkCreate(venueData);

module.exports = seedVenues;
