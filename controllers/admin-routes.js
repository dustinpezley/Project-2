const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Employee, Role, Venue, Talent, Shows } = require('../models');

// Pull back everything before page load
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('========================');
  Employee.findAll({
    attributes: ['first_name', 'last_name'],
    order: ['last_name'],
    include: [
      {
        model: User,
        attributes: ['username', 'email', 'admin'],
      },
      {
        model: Role,
        attributes: ['name', 'salary', 'salary_rate'],
      },
      {
        model: Venue,
        attributes: ['name'],
      },
    ],
  })
    .then(
      Role.findAll({
        attributes: ['name', 'salary_rate', 'salary'],
      })
    )
    .then(
      Venue.findAll({
        attributes: ['name', 'address', 'capacity'],
      })
    )
    .then(
      Talent.findAll({
        attributes: ['title'],
      })
    )
    .then(
      Shows.findAll({
        attributes: ['performance_date', 'performance_time'],
        include: [
          {
            model: Talent,
            attributes: ['title'],
          },
          {
            model: Venue,
            attributes: ['name', 'address', 'capacity'],
          },
        ],
      })
    )
    .then((dbData) => {
      const fullData = dbData.map((data) => data.get({ plain: true }));
      console.log(fullData);
      res.render('admin', {
        fullData,
        title: 'Polyrhythm Admin',
        loggedIn: true,
      });
    })
    .catch((err) => res.status(500).json(err));
});

// router.get('/', withAuth, (req, res) => {
//   console.log(req.session);
//   console.log('========================');

//   var findAllEmployees = Employee.findAll({
//     attributes: ['first_name', 'last_name'],
//     order: ['last_name'],
//     include: [
//       {
//         model: User,
//         attributes: ['username', 'email', 'admin'],
//       },
//       {
//         model: Role,
//         attributes: ['name', 'salary', 'salary_rate'],
//       },
//       {
//         model: Venue,
//         attributes: ['name'],
//       },
//     ],
//   });

//   var findAllRoles = Role.findAll({
//     attributes: ['name', 'salary_rate', 'salary'],
//   });

//   var findAllVenues = Venue.findAll({
//     attributes: ['name', 'address', 'capacity'],
//   });

//   var findAllTalent = Talent.findAll({
//     attributes: ['title'],
//   });

//   var findAllShows = Shows.findAll({
//     attributes: ['performance_date', 'performance_time'],
//     include: [
//       {
//         model: Talent,
//         attributes: ['title'],
//       },
//       {
//         model: Venue,
//         attributes: ['name', 'address', 'capacity'],
//       },
//     ],
//   });

//   Promise.all([
//     findAllEmployees,
//     findAllRoles,
//     findAllShows,
//     findAllTalent,
//     findAllVenues,
//   ])
//     .then((dbData) => {
//       const fullData = dbData.map((data) => data.get({ plain: true }));
//       console.log(fullData);
//       res.render('admin', {
//         fullData,
//         title: 'Polyrhythm Admin',
//         loggedIn: true,
//       });
//     })
//     .catch((err) => res.status(500).json(err));
// });

module.exports = router;
