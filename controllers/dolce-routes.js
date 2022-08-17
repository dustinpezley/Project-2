const router = require('express').Router();
const { Shows, Venue, Talent } = require('../models');

// Get all shows for Dolce
router.get('/', (req, res) => {
  Shows.findAll({
    where: {
      venue_id: 1,
    },
    attributes: ['performance_date', 'performance_time'],
    order: [
      ['performance_date', 'ASC'],
      ['performance_time', 'ASC'],
    ],
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
      res.render('dolce', { shows });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get one show for Dolce
// router.get('/:id', (req,res) => {
//   Shows.findOne({
//     where: {
//       venue_id: 1,
//       id: req.params.id
//     },
//     attributes: ['performance_date', 'performance_time'],
//     order: [
//       ['performance_date', 'ASC'],
//       ['performance_time', 'ASC'],
//     ],
//     include: [
//       {
//         model: Venue,
//         attributes: ['name', 'address', 'capacity'],
//       },
//       {
//         model: Talent,
//         attributes: ['title'],
//       },
//     ],
//   })
// })

module.exports = router;
