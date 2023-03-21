const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  ***REMOVED***
    name: ***REMOVED***
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  ***REMOVED*** timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
