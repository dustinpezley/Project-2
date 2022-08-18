const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('polyrhythm', {
    layout: 'main',
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
