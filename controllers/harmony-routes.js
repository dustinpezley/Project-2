const { Op } = require('sequelize');
const router = require('express').Router();
const { Shows, Venue, Talent } = require('../models');

router.get('/', (req, res) => {
  const currentDate = new Date().toISOString().split('T')[0];
  Shows.findOne({
    where: {
      [Op.and]: [
        { venue_id: 3 },
        {
          performance_date: {
            [Op.gte]: currentDate,
          },
        },
      ],
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
      dbShowsData.get({ plain: true });

      res.render('harmony', { dbShowsData, title: 'Harmony' });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
