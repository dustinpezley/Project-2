const router = require('express').Router();

const apiRoutes = require('./api');
const polyrhythmRoutes = require('./polyrhythm-routes');
const dolceRoutes = require('./dolce-routes');

router.use('/', polyrhythmRoutes);
router.use('/dolce', dolceRoutes);
router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.status(404).end;
// });

module.exports = router;
