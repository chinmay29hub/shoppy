const express = require('express');
const router = express.Router();

const ***REMOVED***
  signup,
  signin,
  signout,
  requireSignin,
***REMOVED***= require('../controllers/auth');
const ***REMOVED*** userSignupValidator ***REMOVED***= require('../validator');

router.get('/signout', signout);
router.post('/signin', signin);
router.post('/signup', userSignupValidator, signup);

module.exports = router;
