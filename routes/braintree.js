const express = require('express');
const router = express.Router();

const { generateToken, processPayment } = require('../controllers/braintree');
const { userById } = require('../controllers/user');
const { requireSignin, isAuth } = require('../controllers/auth');

router.post(
  '/braintree/payment/:userId',
  requireSignin,
  isAuth,
  processPayment
);
router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken);

router.param('userId', userById);

module.exports = router;
