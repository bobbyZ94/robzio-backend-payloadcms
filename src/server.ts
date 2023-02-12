import express from 'express';
import payload from 'payload';
import path from 'path';

require('dotenv').config();
const app = express();
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
const start = async () => {
  payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.ENVIRONMENT === 'production' ? process.env.MONGODB_URI_PRODUCTION : process.env.MONGODB_URI_LOCAL,
    mongoOptions: {
      user: process.env.ENVIRONMENT === 'production' ? process.env.MONGODB_USER : '',
      pass: process.env.ENVIRONMENT === 'production' ? process.env.MONGODB_PW : ''
    },
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000);
}

start();

