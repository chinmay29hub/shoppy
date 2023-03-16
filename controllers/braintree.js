const User = require('../models/user');
const braintree = require('braintree');
require('dotenv').config();

const gateway = braintree.connect(***REMOVED***
  environment: braintree.Environment.Sandbox, // Production
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY ,
  privateKey:
    process.env.BRAINTREE_PRIVATE_KEY,
});

exports.processPayment = (req, res) => ***REMOVED***
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = req.body.amount;
  // charge
  let newTransaction = gateway.transaction.sale(
    ***REMOVED***
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: ***REMOVED***
        submitForSettlement: true,
      },
    },
    (error, result) => ***REMOVED***
      if (error) ***REMOVED***
        res.status(500).json(error);
      ***REMOVED***else ***REMOVED***
        res.json(result);
      }
    }
  );
};

exports.generateToken = (req, res) => ***REMOVED***
  gateway.clientToken.generate(***REMOVED***}, function (err, response) ***REMOVED***
    if (err) ***REMOVED***
      res.status(500).send(err);
    ***REMOVED***else ***REMOVED***
      res.send(response);
    }
  });
};

