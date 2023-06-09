const express = require('express');
const router = express.Router();

const {
  create,
  productById,
  read,
  update,
  remove,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
  listSearch
} = require('../controllers/product');
const { userById } = require('../controllers/user');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.get('/product/:productId', read);

router.put(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.delete(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.get('/product/photo/:productId', photo);
router.post('/products/by/search', listBySearch);
router.get('/products/search', listSearch);
router.get('/products/related/:productId', listRelated);
router.get('/products', list);
router.get('/products/categories', listCategories);

router.param('productId', productById);
router.param('userId', userById);

module.exports = router;
