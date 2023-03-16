const express = require('express');
const router = express.Router();

const ***REMOVED*** requireSignin, isAuth ***REMOVED***= require('../controllers/auth');
const ***REMOVED*** userById ***REMOVED***= require('../controllers/user');
const ***REMOVED*** generateToken, processPayment ***REMOVED***= require('../controllers/braintree');

router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken);
router.post(
  '/braintree/payment/:userId',
  requireSignin,
  isAuth,
  processPayment
);

router.param('userId', userById);

module.exports = router;
