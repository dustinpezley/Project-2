const router = require('express').Router();
const { Venue } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {//get all venues
    Venue.findAll()
    .then((dbVenueData) => res.json(dbVenueData))
    .catch((err) => res.status(500).json(err))

}) 

router.get('/:id', (req, res) => {//get one venue by id
    Venue.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then((dbVenueData) => {
        if (!dbVenueData) {
          res.status(404).json({ message: 'Venue not found!' });
          return;
        }
  
        res.json(dbVenueData);
      })
      .catch((err) => res.status(500).json(err));
});

module.exports = router;