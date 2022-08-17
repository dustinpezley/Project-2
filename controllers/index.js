const router = require('express').Router();

const apiRoutes = require('./api');
const polyrhythmRoutes = require('./polyrhythm-routes');

router.use('/polyrhythm', polyrhythmRoutes);
router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.status(404).end;
// });

module.exports = router;
