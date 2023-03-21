const express = require('express');
const router = express.Router();

const ***REMOVED*** generateToken, processPayment ***REMOVED***= require('../controllers/braintree');
const ***REMOVED*** userById ***REMOVED***= require('../controllers/user');
const ***REMOVED*** requireSignin, isAuth ***REMOVED***= require('../controllers/auth');

router.post(
  '/braintree/payment/:userId',
  requireSignin,
  isAuth,
  processPayment
);
router.get('/braintree/getToken/:userId', requireSignin, isAuth, generateToken);

router.param('userId', userById);

module.exports = router;
