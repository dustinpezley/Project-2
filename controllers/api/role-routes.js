const router = require('express').Router();
const { User, Role, Venue } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all roles
router.get('/', withAuth, (req, res) => {
  Role.findAll({
    attributes: ['id', 'name', 'salary-rate', 'salary'],
    include: [
      {
        model: User,
        attributes: ['username', 'email', 'admin'],
      },
      {
        model: Venue,
        attributes: ['name'],
      },
    ],
  })
    .then((dbRoleData) => res.json(dbRoleData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Get single role
router.get('/:id', withAuth, (req, res) => {
  Role.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'name', 'salary-rate', 'salary'],
    include: [
      {
        model: User,
        attributes: ['username', 'email', 'admin'],
      },
      {
        model: Venue,
        attributes: ['name'],
      },
    ],
  })
    .then((dbRoleData) => {
      if (!dbRoleData) {
        res.status(404).json({ message: 'Role not found' });
        return;
      }

      res.json(dbRoleData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Add a new role
router.post('/', (req, res) => {
  Role.create({
    name: req.body.name,
    salary_rate: req.body.salary_rate,
    salary: req.body.salary,
  })
    .then((dbRoleData) => res.json(dbRoleData))
    .catch((err) => res.status(500).json(err));
});

// Update role information
router.put('/:id', withAuth, (req, res) => {
  Role.update(
    {
      name: req.body.name,
      salary_rate: req.body.salary_rate,
      salary: req.body.salary,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRoleData) => {
      if (!dbRoleData) {
        res.status(404).json({ message: 'Role not found' });
        return;
      }

      res.json(dbRoleData);
    })
    .catch((err) => res.status(500).json(err));
});

// Delete role record (soft delete)
router.delete('/:id', withAuth, (req, res) => {
  Role.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRoleData) => {
      if (!dbRoleData) {
        res.status(404).json({ message: 'Role not found' });
        return;
      }

      res.json(dbRoleData);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
