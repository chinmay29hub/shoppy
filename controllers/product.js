const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Product = require('../models/product');
const ***REMOVED*** errorHandler ***REMOVED***= require('../helpers/dbErrorHandler');

exports.productById = (req, res, next, id) => ***REMOVED***
  Product.findById(id)
    .populate('category')
    .exec((err, product) => ***REMOVED***
      if (err || !product) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'Product not found',
        });
      }
      req.product = product;
      next();
    });
};

exports.read = (req, res) => ***REMOVED***
  req.product.photo = undefined;
  return res.json(req.product);
};

exports.create = (req, res) => ***REMOVED***
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: 'Image could not be uploaded',
      });
    }
    // check for all fields
    const ***REMOVED*** name, description, price, category, quantity, shipping ***REMOVED***= fields;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !quantity ||
      !shipping
    ) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: 'All fields are required',
      });
    }

    let product = new Product(fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) ***REMOVED***
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 1000000) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'Image should be less than 1mb in size',
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => ***REMOVED***
      if (err) ***REMOVED***
        console.log('PRODUCT CREATE ERROR ', err);
        return res.status(400).json(***REMOVED***
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

exports.remove = (req, res) => ***REMOVED***
  let product = req.product;
  product.remove((err, deletedProduct) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: errorHandler(err),
      });
    }
    res.json(***REMOVED***
      message: 'Product deleted successfully',
    });
  });
};

exports.update = (req, res) => ***REMOVED***
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: 'Image could not be uploaded',
      });
    }

    let product = req.product;
    product = _.extend(product, fields);

    // 1kb = 1000
    // 1mb = 1000000

    if (files.photo) ***REMOVED***
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 1000000) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'Image should be less than 1mb in size',
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

/**
 * sell / arrival
 * by sell = /products?sortBy=sold&order=desc&limit=4
 * by arrival = /products?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all products are returned
 */

exports.list = (req, res) => ***REMOVED***
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Product.find()
    .select('-photo')
    .populate('category')
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, products) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'Products not found',
        });
      }
      res.json(products);
    });
};

/**
 * it will find the products based on the req product category
 * other products that has the same category, will be returned
 */

exports.listRelated = (req, res) => ***REMOVED***
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Product.find(***REMOVED*** _id: ***REMOVED*** $ne: req.product }, category: req.product.category })
    .limit(limit)
    .populate('category', '_id name')
    .exec((err, products) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'Products not found',
        });
      }
      res.json(products);
    });
};

exports.listCategories = (req, res) => ***REMOVED***
  Product.distinct('category', ***REMOVED***}, (err, categories) => ***REMOVED***
    if (err) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: 'Categories not found',
      });
    }
    res.json(categories);
  });
};

/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

exports.listBySearch = (req, res) => ***REMOVED***
  let order = req.body.order ? req.body.order : 'desc';
  let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = ***REMOVED***};

  // console.log(order, sortBy, limit, skip, req.body.filters);
  // console.log("findArgs", findArgs);

  for (let key in req.body.filters) ***REMOVED***
    if (req.body.filters[key].length > 0) ***REMOVED***
      if (key === 'price') ***REMOVED***
        // gte -  greater than price [0-10]
        // lte - less than
        findArgs[key] = ***REMOVED***
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      ***REMOVED***else ***REMOVED***
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  Product.find(findArgs)
    .select('-photo')
    .populate('category')
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: 'Products not found',
        });
      }
      res.json(***REMOVED***
        size: data.length,
        data,
      });
    });
};

exports.photo = (req, res, next) => ***REMOVED***
  if (req.product.photo.data) ***REMOVED***
    res.set('Content-Type', req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};

exports.listSearch = (req, res) => ***REMOVED***
  // create query object to hold search value and category value
  const query = ***REMOVED***};
  // assign search value to query.name
  if (req.query.search) ***REMOVED***
    query.name = ***REMOVED*** $regex: req.query.search, $options: 'i' };
    // assigne category value to query.category
    if (req.query.category && req.query.category != 'All') ***REMOVED***
      query.category = req.query.category;
    }
    // find the product based on query object with 2 properties
    // search and category
    Product.find(query, (err, products) => ***REMOVED***
      if (err) ***REMOVED***
        return res.status(400).json(***REMOVED***
          error: errorHandler(err),
        });
      }
      res.json(products);
    }).select('-photo');
  }
};

exports.decreaseQuantity = (req, res, next) => ***REMOVED***
  let bulkOps = req.body.order.products.map((item) => ***REMOVED***
    return ***REMOVED***
      updateOne: ***REMOVED***
        filter: ***REMOVED*** _id: item._id },
        update: ***REMOVED*** $inc: ***REMOVED*** quantity: -item.count, sold: +item.count ***REMOVED***},
      },
    };
  });

  Product.bulkWrite(bulkOps, ***REMOVED***}, (error, products) => ***REMOVED***
    if (error) ***REMOVED***
      return res.status(400).json(***REMOVED***
        error: 'Could not update product',
      });
    }
    next();
  });
};
