const express = require('express');
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin,
} = require('../controllers/auth');
const { userSignupValidator } = require('../validator');

router.get('/signout', signout);
router.post('/signin', signin);
router.post('/signup', userSignupValidator, signup);

module.exports = router;
