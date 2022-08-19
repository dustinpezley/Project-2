const router = require('express').Router();
const { Shows, Venue, Talent } = require('../models');

router.get('/', (req, res) => {
  Shows.findAll({
    where: {
      venue_id: 2,
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
      res.render('modular', { shows, title: 'Modular' });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
