const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ***REMOVED*** ObjectId ***REMOVED***= mongoose.Schema;

const CartItemSchema = new mongoose.Schema(
  ***REMOVED***
    product: ***REMOVED*** type: ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    count: Number,
  },
  ***REMOVED*** timestamps: true }
);

const CartItem = mongoose.model('CartItem', CartItemSchema);

const OrderSchema = new mongoose.Schema(
  ***REMOVED***
    products: [CartItemSchema],
    transaction_id: ***REMOVED***},
    amount: ***REMOVED*** type: Number },
    address: String,
    status: ***REMOVED***
      type: String,
      default: 'Not processed',
      enum: [
        'Not processed',
        'Processing',
        'Shipped',
        'Delivered',
        'Cancelled',
      ], // enum means string objects
    },
    updated: Date,
    user: ***REMOVED*** type: ObjectId, ref: 'User' },
  },
  ***REMOVED*** timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = ***REMOVED*** Order, CartItem };
