const User = require('../models/user');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt'); // for auth check
const ***REMOVED*** errorHandler ***REMOVED***= require('../helpers/dbErrorHandler');

require('dotenv').config();

exports.signup = (req, res) => ***REMOVED***
  // console.log('req.body', req.body);
  const user = new User(req.body);
  user.save((err, user) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        err: errorHandler(err),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json(***REMOVED***
      user,
    });
  });
};

exports.signin = (req, res) => ***REMOVED***
  // find the user based on email
  const ***REMOVED*** email, password ***REMOVED***= req.body;
  User.findOne(***REMOVED*** email }, (err, user) => ***REMOVED***
    if (err || !user) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: "User with that email doesn't exist. Please signup.",
      });
    }
    // if user found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(password)) ***REMOVED***
      return res.status(401).json(***REMOVED***
        error: "Email and password didn't match",
      });
    }
    // generate a signed token with user id and secret
    const token = jwt.sign(
      ***REMOVED*** _id: user._id },
      process.env.JWT_SECRET
    );
    // persist the token as 't' in cookie with expiry date
    res.cookie('t', token, ***REMOVED*** expire: new Date() + 9999 });
    // return response with user and token to frontend client
    const ***REMOVED*** _id, name, email, role ***REMOVED***= user;
    return res.json(***REMOVED*** token, user: ***REMOVED*** _id, email, name, role ***REMOVED***});
  });
};

exports.signout = (req, res) => ***REMOVED***
  res.clearCookie('t');
  res.json(***REMOVED*** message: 'Signout success' });
};

exports.requireSignin = expressJwt(***REMOVED***
  secret: process.env.JWT_SECRET,
  // algorithms: ['RS256'],
  userProperty: 'auth',
});

exports.isAuth = (req, res, next) => ***REMOVED***
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) ***REMOVED***
    return res.status(403).json(***REMOVED***
      error: 'Access denied',
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => ***REMOVED***
  if (req.profile.role === 0) ***REMOVED***
    return res.status(403).json(***REMOVED***
      error: 'Admin resource! Access denied',
    });
  }
  next();
};
