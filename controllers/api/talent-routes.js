const router = require('express').Router();
const { Talent, Venue } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {//get all talents
    Talent.findAll({
        attributes: [
            'id',
            'title',
            'venue_id',
        ],
        include: [
            {
                model: Venue,
                attributes: ['name', 'address']
            }
        ]
    })
    .then(dbTalentData => res._construct.json(dbTalentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}); 

router.get('/:id', (req, res) => { //get one talent by id
    Talent.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
        ],
        include: [
            {
                model: Venue,
                attributes: ['name', 'address']
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

router.post('/', (req, res) => {//create talent
    Talent.create({
        title: req.body.title,
        venue_id: req.body.venue_id //obtained from window.location, meaning talents will be added on the venue page they will be performing at
    })
    .then(dbTalentData => res.json(dbTalentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
}); 

router.delete('/:id', (req, res) => {//delete talent by id
    Talent.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbTalentData => {
        if (!dbTalentData){
            res.status(404).json({ message: 'No Talent found with this id '});
            return;
        }
        res.json(dbTalentData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
}); 

module.exports = router;