const express = require('express');
const router = express.Router();

const ***REMOVED*** requireSignin, isAuth, isAdmin ***REMOVED***= require('../controllers/auth');

const ***REMOVED***
  userById,
  read,
  update,
  purchaseHistory,
***REMOVED***= require('../controllers/user');

router.get('/user/:userId', requireSignin, isAuth, read);
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);
router.put('/user/:userId', requireSignin, isAuth, update);

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => ***REMOVED***
  res.json(***REMOVED***
    user: req.profile,
  });
});


router.param('userId', userById);

module.exports = router;
