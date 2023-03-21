const ***REMOVED*** Order, CartItem ***REMOVED***= require('../models/order');
const ***REMOVED*** errorHandler ***REMOVED***= require('../helpers/dbErrorHandler');

exports.create = (req, res) => ***REMOVED***
  // console.log('CREATE ORDER: ', req.body);
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((error, data) => ***REMOVED***
    if (error) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: errorHandler(error),
      });
    }
    res.json(data);
  });
};

exports.updateOrderStatus = (req, res) => ***REMOVED***
  Order.update(
    ***REMOVED*** _id: req.body.orderId },
    ***REMOVED*** $set: ***REMOVED*** status: req.body.status ***REMOVED***},
    (err, order) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: errorHandler(err),
        });
      }
      res.json(order);
    }
  );
};

exports.getOrderStatus = (req, res) => ***REMOVED***
  Order.find()
    .then((data) => ***REMOVED***
      console.log(data)
      res.json(data)
    })
}

exports.listOrders = (req, res) => ***REMOVED***
  Order.find()
    .populate('user', '_id name address')
    .sort('-created')
    .exec((err, orders) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: errorHandler(error),
        });
      }
      res.json(orders);
    });
};

exports.getStatusValues = (req, res) => ***REMOVED***
  res.json(Order.schema.path('status').enumValues);
};

exports.orderById = (req, res, next, id) => ***REMOVED***
  Order.findById(id)
    .populate('products.product', 'name price')
    .exec((err, order) => ***REMOVED***
      if (err || !order) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: errorHandler(err),
        });
      }
      req.order = order;
      next();
    });
};