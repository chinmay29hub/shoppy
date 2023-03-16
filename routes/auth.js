const express = require('express');
const router = express.Router();

const ***REMOVED***
  signup,
  signin,
  signout,
  requireSignin,
***REMOVED***= require('../controllers/auth');
const ***REMOVED*** userSignupValidator ***REMOVED***= require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;
