const mongoose = require('mongoose');
const ***REMOVED*** ObjectId ***REMOVED***= mongoose.Schema;

const productSchema = new mongoose.Schema(
  ***REMOVED***
    name: ***REMOVED***
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: ***REMOVED***
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: ***REMOVED***
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    category: ***REMOVED***
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
    quantity: ***REMOVED***
      type: Number,
    },
    sold: ***REMOVED***
      type: Number,
      default: 0,
    },
    photo: ***REMOVED***
      data: Buffer,
      contentType: String,
    },
    shipping: ***REMOVED***
      required: false,
      type: Boolean,
    },
  },
  ***REMOVED*** timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
