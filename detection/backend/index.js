const express = require('express');
const vision = require('@google-cloud/vision');
const cors = require('cors');
const multer = require('multer');
const upload = multer(***REMOVED*** dest: 'uploads/' });
const app = express();

app.use(cors()); // Allow cross-origin requests from any domain

const CREDENTIALS = require('./serviceAccountKey.json');

const CONFIG = ***REMOVED***
  credentials: ***REMOVED***
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
};

const client = new vision.ImageAnnotatorClient(CONFIG);

app.post('/logo-detection', upload.single('image'), async (req, res) => ***REMOVED***
  try ***REMOVED***
    const [result] = await client.logoDetection(req.file.path);
    const logos = result.logoAnnotations.map((annotation) => annotation.description);
    res.json(***REMOVED*** logos });
  ***REMOVED***catch (err) ***REMOVED***
    console.error(err);
    res.status(500).json(***REMOVED*** error: 'An error occurred' });
  }
});

app.listen(3001, () => ***REMOVED***
  console.log('Server listening on port 3001');
});
