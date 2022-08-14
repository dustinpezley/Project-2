const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/employees', employeeRoutes);

module.exports = router;
