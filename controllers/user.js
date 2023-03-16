const User = require('../models/user');
const ***REMOVED*** Order ***REMOVED***= require('../models/order');
const ***REMOVED*** errorHandler ***REMOVED***= require('../helpers/dbErrorHandler');

exports.userById = (req, res, next, id) => ***REMOVED***
  User.findById(id).exec((err, user) => ***REMOVED***
    if (err || !user) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};

exports.read = (req, res) => ***REMOVED***
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.update = (req, res) => ***REMOVED***
  // console.log('user update', req.body);
  // req.body.role = 0; // role will always be 0
  User.findOneAndUpdate(
    ***REMOVED*** _id: req.profile._id },
    ***REMOVED*** $set: req.body },
    ***REMOVED*** new: true },
    (err, user) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'You are not authorized to perform this action',
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};

// exports.update = (req, res) => ***REMOVED***
//   // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
//   const ***REMOVED*** name, password ***REMOVED***= req.body;

//   User.findOne(***REMOVED*** _id: req.profile._id }, (err, user) => ***REMOVED***
//     if (err || !user) ***REMOVED***
//       return res.status(400).json(***REMOVED***
//         error: 'User not found',
//       });
//     }
//     if (!name) ***REMOVED***
//       return res.status(400).json(***REMOVED***
//         error: 'Name is required',
//       });
//     ***REMOVED***else ***REMOVED***
//       user.name = name;
//     }

//     if (password) ***REMOVED***
//       if (password.length < 6) ***REMOVED***
//         return res.status(400).json(***REMOVED***
//           error: 'Password should be min 6 characters long',
//         });
//       ***REMOVED***else ***REMOVED***
//         user.password = password;
//       }
//     }

//     user.save((err, updatedUser) => ***REMOVED***
//       if (err) ***REMOVED***
//         console.log('USER UPDATE ERROR', err);
//         return res.status(400).json(***REMOVED***
//           error: 'User update failed',
//         });
//       }
//       updatedUser.hashed_password = undefined;
//       updatedUser.salt = undefined;
//       res.json(updatedUser);
//     });
//   });
// };

exports.addOrderToUserHistory = (req, res, next) => ***REMOVED***
  let history = [];

  req.body.order.products.forEach((item) => ***REMOVED***
    history.push(***REMOVED***
      _id: item._id,
      name: item.name,
      description: item.description,
      category: item.category,
      quantity: item.count,
      transaction_id: req.body.order.transaction_id,
      amount: req.body.order.amount,
    });
  });

  User.findOneAndUpdate(
    ***REMOVED*** _id: req.profile._id },
    ***REMOVED*** $push: ***REMOVED*** history: history ***REMOVED***},
    ***REMOVED*** new: true },
    (error, data) => ***REMOVED***
      if (error) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'Could not update user purchase history',
        });
      }
      next();
    }
  );
};

exports.purchaseHistory = (req, res) => ***REMOVED***
  Order.find(***REMOVED*** user: req.profile._id })
    .populate('user', '_id name')
    .sort('-created')
    .exec((err, orders) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: errorHandler(err),
        });
      }
      res.json(orders);
    });
};
