const router = require('express').Router();

const employeeRoutes = require('./employee-routes');
const userRoutes = require('./user-routes');
const showRoutes = require('./shows-routes');

router.use('/users', userRoutes);
router.use('/employees', employeeRoutes);
router.use('/shows', showRoutes);

module.exports = router;
