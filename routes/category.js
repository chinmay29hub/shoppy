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
const ***REMOVED*** requireSignin, isAuth, isAdmin ***REMOVED***= require('../controllers/auth');
const ***REMOVED*** userById ***REMOVED***= require('../controllers/user');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.delete(
  '/category/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
