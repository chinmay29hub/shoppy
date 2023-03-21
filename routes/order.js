const express = require('express');
const router = express.Router();

const ***REMOVED*** userById, addOrderToUserHistory ***REMOVED***= require('../controllers/user');
const ***REMOVED*** requireSignin, isAuth, isAdmin ***REMOVED***= require('../controllers/auth');
const ***REMOVED***
  create,
  listOrders,
  getStatusValues,
  orderById,
  updateOrderStatus,
***REMOVED***= require('../controllers/order');
const ***REMOVED*** decreaseQuantity ***REMOVED***= require('../controllers/product');

router.get('/order/list/:userId', requireSignin, isAuth, isAdmin, listOrders);

router.post(
  '/order/create/:userId',
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.put(
  '/order/:orderId/status/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  updateOrderStatus
);

router.get(
  '/order/status-values/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  getStatusValues
);

router.param('orderId', orderById);
router.param('userId', userById);

module.exports = router;
