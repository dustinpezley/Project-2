const router = require('express').Router();
const { Talent, Venue } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  // get all talents
  Talent.findAll({
    attributes: ['id', 'title', 'venue_id'],
    include: [
      {
        model: Venue,
        attributes: ['name', 'address'],
      },
    ],
  })
    .then((dbTalentData) => res.json(dbTalentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
  // get one talent by id
  Talent.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title'],
    include: [
      {
        model: Venue,
        attributes: ['name', 'address'],
      },
    ],
  })
    .then((dbTalentData) => {
      if (!dbTalentData) {
        res.status(404).json({ message: 'Talent not found' });
        return;
      }

      res.json(dbTalentData);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/', withAuth, (req, res) => {
  // create talent
  Talent.create({
    title: req.body.title,
  })
    .then((dbTalentData) => res.json(dbTalentData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Talent.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRoleData) => res.json(dbRoleData))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', withAuth, (req, res) => {
  // delete talent by id
  Talent.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTalentData) => {
      if (!dbTalentData) {
        res.status(404).json({ message: 'No Talent found with this id ' });
        return;
      }
      res.json(dbTalentData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
