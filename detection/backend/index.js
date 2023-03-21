const express = require('express');
const vision = require('@google-cloud/vision');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(cors()); // Allow cross-origin requests from any domain

const CREDENTIALS = require('./serviceAccountKey.json');

const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
};

const client = new vision.ImageAnnotatorClient(CONFIG);

app.post('/logo-detection', upload.single('image'), async (req, res) => {
  try {
    const [result] = await client.logoDetection(req.file.buffer);
    const logos = result.logoAnnotations.map((annotation) => annotation.description);
    res.json({ logos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log('Server listening on port 3001');
});
