const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('polyrhythm', {
    layout: 'main',
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', (req, res) => {
  if (req.sessionStore.loggedIn) {
    res.redirect('/admin');
    return;
  }

  res.render('login');
});

module.exports = router;
