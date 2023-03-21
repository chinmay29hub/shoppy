const express = require('express');
const router = express.Router();

const { userById, addOrderToUserHistory } = require('../controllers/user');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const {
  create,
  listOrders,
  getStatusValues,
  orderById,
  updateOrderStatus,
} = require('../controllers/order');
const { decreaseQuantity } = require('../controllers/product');

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
