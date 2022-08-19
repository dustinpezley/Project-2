const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Employee, Role, Venue, Talent, Shows } = require('../models');

// Pull back everything before page load
// router.get('/', withAuth, (req, res) => {
//   console.log(req.session);
//   console.log('========================');
//   Employee.findAll({
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
//   })
//     .then(
//       Role.findAll({
//         attributes: ['name', 'salary_rate', 'salary'],
//       })
//     )
//     .then(
//       Venue.findAll({
//         attributes: ['name', 'address', 'capacity'],
//       })
//     )
//     .then(
//       Talent.findAll({
//         attributes: ['title'],
//       })
//     )
//     .then(
//       Shows.findAll({
//         attributes: ['performance_date', 'performance_time'],
//         include: [
//           {
//             model: Talent,
//             attributes: ['title'],
//           },
//           {
//             model: Venue,
//             attributes: ['name', 'address', 'capacity'],
//           },
//         ],
//       })
//     )
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

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('========================');

  Promise.all([
    Employee.findAll({
      attributes: ['id', 'role_id', 'first_name', 'last_name', 'primary_venue'],
      order: ['last_name'],
      include: [
        {
          model: User,
          attributes: ['id', 'username', 'email', 'employee_id', 'admin'],
        },
        {
          model: Role,
          attributes: ['id', 'name', 'salary', 'salary_rate'],
        },
        {
          model: Venue,
          attributes: ['id', 'name', 'address', 'capacity'],
        },
      ],
    }),

    Role.findAll({
      attributes: ['id', 'name', 'salary_rate', 'salary'],
    }),

    Venue.findAll({
      attributes: ['id', 'name', 'address', 'capacity'],
    }),

    Talent.findAll({
      attributes: ['id', 'title'],
    }),

    Shows.findAll({
      attributes: [
        'id',
        'talent_id',
        'performance_date',
        'performance_time',
        'venue_id',
      ],
      include: [
        {
          model: Talent,
          attributes: ['id', 'title'],
        },
        {
          model: Venue,
          attributes: ['id', 'name', 'address', 'capacity'],
        },
      ],
    }),
  ])
    .then((dbData) => {
      // const fullData = dbData.map((data) => data.get({ plain: true }));
      const fullData = JSON.parse(JSON.stringify(dbData));
      const namedData = {
        employees: fullData[0],
        roles: fullData[1],
        venues: fullData[2],
        talent: fullData[3],
        shows: fullData[4],
      };

      console.log(namedData);
      res.render('admin', {
        namedData,
        title: 'Polyrhythm Admin',
        loggedIn: true,
      });
    })
    .catch((err) => res.status(500).json(err));
});

// router.get('/', withAuth, (req, res) => {
//   console.log(req.session);
//   console.log('========================');

//   Employee.findAll({
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

//   Role.findAll({
//     attributes: ['name', 'salary_rate', 'salary'],
//   });

//   Venue.findAll({
//     attributes: ['name', 'address', 'capacity'],
//   });

//   Talent.findAll({
//     attributes: ['title'],
//   });

//   Shows.findAll({
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
//   })
//     .then((dbData) => {
//       // const fullData = dbData.map((data) => data.get({ plain: true }));
//       console.log(dbData);
//       res.render('admin', {
//         dbData,
//         title: 'Polyrhythm Admin',
//         loggedIn: true,
//       });
//     })
//     .catch((err) => res.status(500).json(err));
// });

module.exports = router;
