const express = require('express');
const router = express.Router();

const ***REMOVED*** requireSignin, isAuth, isAdmin ***REMOVED***= require('../controllers/auth');
const ***REMOVED*** userById, addOrderToUserHistory ***REMOVED***= require('../controllers/user');
const ***REMOVED***
  create,
  listOrders,
  getStatusValues,
  orderById,
  updateOrderStatus,
***REMOVED***= require('../controllers/order');

const ***REMOVED*** decreaseQuantity ***REMOVED***= require('../controllers/product');

router.post(
  '/order/create/:userId',
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.get('/order/list/:userId', requireSignin, isAuth, isAdmin, listOrders);

router.get(
  '/order/status-values/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  getStatusValues
);

router.put(
  '/order/:orderId/status/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  updateOrderStatus
);

router.param('userId', userById);
router.param('orderId', orderById);

module.exports = router;
