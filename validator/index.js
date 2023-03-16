exports.userSignupValidator = (req, res, next) => ***REMOVED***
  req.check('name', 'Name is required').notEmpty();
  req
    .check('email', 'Email must be between 3 to 32 characters')
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength(***REMOVED***
      min: 4,
      max: 32,
    });
  req.check('password', 'Password is required').notEmpty();
  req
    .check('password')
    .isLength(***REMOVED*** min: 6 })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('Password must contain a number');
  const errors = req.validationErrors();
  if (errors) ***REMOVED***
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json(***REMOVED*** error: firstError });
  }
  next();
};
