const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Employee, Role, Venue } = require('../models');

// Pull back everything before page load
router.get('/', withAuth, (req, res) => {
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
    .then((dbEmployeeData) => {
      const employees = dbEmployeeData.map((employee) =>
        employee.get({ plain: true })
      );
      res.render('admin', { employees, loggedIn: true });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
