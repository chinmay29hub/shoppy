const express = require('express');
const router = express.Router();

const ***REMOVED***
  create,
  categoryById,
  read,
  update,
  remove,
  list
***REMOVED***= require('../controllers/category');
const ***REMOVED*** userById ***REMOVED***= require('../controllers/user');
const ***REMOVED*** requireSignin, isAuth, isAdmin ***REMOVED***= require('../controllers/auth');

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/category/:categoryId', read);
router.delete(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.get('/categories', list);

router.param('userId', userById);
router.param('categoryId', categoryById);

module.exports = router;
