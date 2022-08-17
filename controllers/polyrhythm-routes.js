const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('polyrhythm', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
