const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const expressValidator = require('express-validator');
require('dotenv').config();
// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');

const app = express();

const connectDB = async () => ***REMOVED***
  try ***REMOVED***
    await mongoose.connect(
      process.env.MONGODB_URI,
      ***REMOVED***
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log('MongoDB Connected');
  ***REMOVED***catch (err) ***REMOVED***
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};
connectDB();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use('/api', orderRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', authRoutes);

// if (process.env.NODE_ENV === 'production') ***REMOVED***
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => ***REMOVED***
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => ***REMOVED***
  console.log(`Server is running on port $***REMOVED***PORT}`);
});
