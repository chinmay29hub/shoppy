const mongoose = require('mongoose');
const crypto = require('crypto');
const ***REMOVED*** v1: uuidv1 ***REMOVED***= require('uuid');

const userSchema = new mongoose.Schema(
  ***REMOVED***
    name: ***REMOVED***
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: ***REMOVED***
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    hashed_password: ***REMOVED***
      type: String,
      required: true,
    },
    about: ***REMOVED***
      type: String,
      trim: true,
    },
    salt: String,
    role: ***REMOVED***
      type: Number,
      default: 0,
    },
    history: ***REMOVED***
      type: Array,
      default: [],
    },
  },
  ***REMOVED*** timestamps: true }
);

userSchema
  .virtual('password')
  .set(function (password) ***REMOVED***
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () ***REMOVED***
    return this._password;
  });

userSchema.methods = ***REMOVED***
  authenticate: function(plainText) ***REMOVED***
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) ***REMOVED***
    if (!password) return '';
    try ***REMOVED***
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    ***REMOVED***catch (err) ***REMOVED***
      return '';
    }
  },
};
module.exports = mongoose.model('User', userSchema);
