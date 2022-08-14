const router = require('express').Router();
const { User, Employee, Role, Venue } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all employees
router.get('/', withAuth, (req, res) => {
  Employee.findAll({
    attributes: ['first_name', 'last_name'],
    include: [
      {
        model: User,
        attributes: ['username', 'email', 'admin'],
      },
      {
        model: Role,
        attributes: ['name'],
      },
      {
        model: Venue,
        attributes: ['name'],
      },
    ],
  })
    .then((dbEmployeeData) => res.json(dbEmployeeData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get single employee
router.get('/:id', withAuth, (req, res) => {
  Employee.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['first_name', 'last_name'],
    include: [
      {
        model: User,
        attributes: ['username', 'email', 'admin'],
      },
      {
        model: Role,
        attributes: ['name'],
      },
      {
        model: Venue,
        attributes: ['name'],
      },
    ],
  })
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: 'Employee not found' });
        return;
      }

      res.json(dbEmployeeData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Add a new employee
router.post('/', withAuth, (req, res) => {
  Employee.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role_id: req.body.role_id,
  })
    .then((dbEmployeeData) => res.json(dbEmployeeData))
    .catch((err) => res.status(500).json(err));
});

// Update employee information
router.put('/:id', withAuth, (req, res) => {
  Employee.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      role_id: req.body.role_id,
      primary_venue: req.body.primary_venue,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: 'Employee not found' });
        return;
      }

      res.json(dbEmployeeData);
    })
    .catch((err) => res.status(500).json(err));
});

// Delete employee record (soft delete)
router.delete('/:id', withAuth, (req, res) => {
  Employee.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEmployeeData) => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: 'Employee not found' });
        return;
      }

      res.json(dbEmployeeData);
    })
    .catch((err) => res.status(500).json(err));
});
