const Category = require('../models/category');
const ***REMOVED*** errorHandler ***REMOVED***= require('../helpers/dbErrorHandler');

exports.categoryById = (req, res, next, id) => ***REMOVED***
  Category.findById(id).exec((err, category) => ***REMOVED***
    if (err || !category) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: "Category doesn't exist",
      });
    }
    req.category = category;
    next();
  });
};

exports.create = (req, res) => ***REMOVED***
  const category = new Category(req.body);
  category.save((err, data) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: errorHandler(err),
      });
    }
    res.json(***REMOVED*** data });
  });
};

exports.read = (req, res) => ***REMOVED***
  return res.json(req.category);
};

exports.update = (req, res) => ***REMOVED***
  // console.log('req.body', req.body);
  // console.log('category update param', req.params.categoryId);
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => ***REMOVED***
  const category = req.category;
  category.remove((err, data) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: errorHandler(err),
      });
    }
    res.json(***REMOVED***
      message: 'Category deleted',
    });
  });
};

exports.list = (req, res) => ***REMOVED***
  Category.find().exec((err, data) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};
