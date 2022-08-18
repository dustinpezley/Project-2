const { Shows } = require('../models');

const showsData = [
  {
    talent_id: 1,
    performance_date: '2022-08-20',
    perfomance_time: '19:00:00',
    venue_id: 1,
  },
  {
    talent_id: 2,
    performance_date: '2022-08-21',
    perfomance_time: '19:30:00',
    venue_id: 1,
  },
  {
    talent_id: 3,
    performance_date: '2022-08-22',
    perfomance_time: '20:00:00',
    venue_id: 1,
  },
  {
    talent_id: 4,
    performance_date: '2022-08-23',
    perfomance_time: '19:00:00',
    venue_id: 1,
  },
  {
    talent_id: 5,
    performance_date: '2022-08-24',
    perfomance_time: '19:00:00',
    venue_id: 1,
  },
  {
    talent_id: 6,
    performance_date: '2022-08-24',
    perfomance_time: '21:00:00',
    venue_id: 1,
  },
  {
    talent_id: 7,
    performance_date: '2022-08-25',
    perfomance_time: '20:30:00',
    venue_id: 1,
  },
  {
    talent_id: 8,
    performance_date: '2022-08-26',
    perfomance_time: '21:00:00',
    venue_id: 1,
  },
  {
    talent_id: 9,
    performance_date: '2022-08-27',
    perfomance_time: '20:00:00',
    venue_id: 1,
  },
  {
    talent_id: 10,
    performance_date: '2022-08-28',
    perfomance_time: '19:45:00',
    venue_id: 1,
  },
  {
    talent_id: 11,
    performance_date: '2022-08-29',
    perfomance_time: '20:30:00',
    venue_id: 1,
  },
  {
    talent_id: 12,
    performance_date: '2022-08-30',
    perfomance_time: '19:00:00',
    venue_id: 1,
  },
  {
    talent_id: 13,
    performance_date: '2022-08-20',
    perfomance_time: '20:30:00',
    venue_id: 2,
  },
  {
    talent_id: 14,
    performance_date: '2022-08-21',
    perfomance_time: '20:00:00',
    venue_id: 2,
  },
  {
    talent_id: 15,
    performance_date: '2022-08-22',
    perfomance_time: '21:00:00',
    venue_id: 2,
  },
  {
    talent_id: 16,
    performance_date: '2022-08-23',
    perfomance_time: '19:30:00',
    venue_id: 2,
  },
  {
    talent_id: 17,
    performance_date: '2022-08-24',
    perfomance_time: '19:00:00',
    venue_id: 2,
  },
  {
    talent_id: 18,
    performance_date: '2022-08-24',
    perfomance_time: '21:30:00',
    venue_id: 2,
  },
  {
    talent_id: 19,
    performance_date: '2022-08-25',
    perfomance_time: '20:30:00',
    venue_id: 2,
  },
  {
    talent_id: 20,
    performance_date: '2022-08-26',
    perfomance_time: '20:00:00',
    venue_id: 2,
  },
  {
    talent_id: 21,
    performance_date: '2022-08-27',
    perfomance_time: '20:00:00',
    venue_id: 2,
  },
  {
    talent_id: 22,
    performance_date: '2022-08-28',
    perfomance_time: '19:00:00',
    venue_id: 2,
  },
  {
    talent_id: 23,
    performance_date: '2022-08-29',
    perfomance_time: '19:30:00',
    venue_id: 2,
  },
  {
    talent_id: 24,
    performance_date: '2022-08-30',
    perfomance_time: '20:30:00',
    venue_id: 2,
  },
  {
    talent_id: 25,
    performance_date: '2022-08-20',
    perfomance_time: '20:30:00',
    venue_id: 3,
  },
  {
    talent_id: 26,
    performance_date: '2022-08-21',
    perfomance_time: '20:00:00',
    venue_id: 3,
  },
  {
    talent_id: 27,
    performance_date: '2022-08-22',
    perfomance_time: '20:00:00',
    venue_id: 3,
  },
  {
    talent_id: 28,
    performance_date: '2022-08-23',
    perfomance_time: '19:30:00',
    venue_id: 3,
  },
  {
    talent_id: 29,
    performance_date: '2022-08-24',
    perfomance_time: '19:30:00',
    venue_id: 3,
  },
  {
    talent_id: 30,
    performance_date: '2022-08-24',
    perfomance_time: '21:30:00',
    venue_id: 3,
  },
  {
    talent_id: 31,
    performance_date: '2022-08-25',
    perfomance_time: '20:30:00',
    venue_id: 3,
  },
  {
    talent_id: 32,
    performance_date: '2022-08-26',
    perfomance_time: '20:00:00',
    venue_id: 3,
  },
  {
    talent_id: 33,
    performance_date: '2022-08-27',
    perfomance_time: '20:00:00',
    venue_id: 3,
  },
  {
    talent_id: 34,
    performance_date: '2022-08-28',
    perfomance_time: '19:30:00',
    venue_id: 3,
  },
  {
    talent_id: 35,
    performance_date: '2022-08-29',
    perfomance_time: '20:30:00',
    venue_id: 3,
  },
  {
    talent_id: 36,
    performance_date: '2022-08-30',
    perfomance_time: '20:30:00',
    venue_id: 3,
  },
];

const seedShows = () => Shows.bulkCreate(showsData);

module.exports = seedShows;