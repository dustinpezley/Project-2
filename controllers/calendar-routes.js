const { Op } = require('sequelize');
const router = require('express').Router();
const { Shows, Venue, Talent } = require('../models');

router.get('/', (req, res) => {
  const currentDate = new Date().toISOString().split('T')[0];
  Shows.findAll({
    where: {
      performance_date: {
        [Op.gte]: currentDate,
      },
    },
    attributes: ['performance_date', 'performance_time'],
    order: [['performance_date'], ['performance_time']],
    include: [
      {
        model: Venue,
        attributes: ['name', 'address', 'capacity'],
      },
      {
        model: Talent,
        attributes: ['title'],
      },
    ],
  })
    .then((dbShowsData) => {
      const shows = dbShowsData.map((show) => show.get({ plain: true }));

      res.render('calendar', { shows, title: 'Calendar' });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
