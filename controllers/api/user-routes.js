const router = require('express').Router();
const { User, Employee, Role, Venue } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all users
router.get('/', withAuth, (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: 'employees',
        attributes: ['first_name', 'last_name'],
        include: [
          {
            model: 'role',
            attributes: ['name'],
          },
          {
            model: 'venue',
            attributes: ['name'],
          },
        ],
      },
    ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
});

// Get one user
router.get('/:id', withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: 'employees',
        attributes: ['first_name', 'last_name'],
        include: [
          {
            model: 'role',
            attributes: ['name'],
          },
          {
            model: 'venue',
            attributes: ['name'],
          },
        ],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.json(dbUserData);
    })
    .catch((err) => res.status(500).json(err));
});

// Create a new user
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    employee_id: req.body.employee_id,
    admin: req.body.admin,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => res.status(500).json(err));
});

// Log in user
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: 'User not found' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'Login successful' });
    });
  });
});

// Log out the user
router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Update user information
router.put('/:id', withAuth, (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.json(dbUserData);
    })
    .catch((err) => res.status(500).json(err));
});

// Delete user
router.delete(':/id', withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      res.json(dbUserData);
    })
    .catch((err) => res.status(500).json(err));
});
