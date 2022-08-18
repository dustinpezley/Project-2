const router = require('express').Router();
const { Venue, Talent, Sales } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {//get all sales
    Sales.findAll({
        attributes: [
            'id',
            'amount'
        ],
        include: [
            {
                model: Talent,
                attributes: ['title']
            },
            {
                model: Venue,
                attributes: ['name']
            }
        ]
    })
    .then(dbSalesData => res.json(dbSalesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

router.get('/:id', (req, res) => {//get one sale by id
    Sales.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'amount'
        ],
        include: [
            {
                model: Talent,
                attributes: ['title']
            },
            {
                model: Venue,
                attributes: ['name']
            }
        ]
    })
    .then(dbSalesData => {
        if (!dbSalesData) {
          res.status(404).json({ message: 'No sale found with this id' });
          return;
        }
        res.json(dbSalesData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
      
}); 

router.post('/', (req, res) => {//create sale
    Sales.create({
        amount: req.body.amount,
        talent_id: req.body.talent_id,
        venue_id: req.body.venue_id
    })
    .then(dbSalesData => res.json(dbSalesData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

router.delete('/:id', (req, res) => {//delete sale by id
    Sales.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbSalesData => {
        if (!dbSalesData) {
          res.status(404).json({ message: 'No sale found with this id' });
          return;
        }
        res.json(dbSalesData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
