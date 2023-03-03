import express from 'express';
import payload from 'payload';
import path from 'path';

require('dotenv').config();
const app = express();
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

// Stop indexing of admin panel to googlebots
app.use(express.static(__dirname, {
  setHeaders(res, path, stat) {
      res.setHeader("X-Robots-Tag", "noindex")
  },
}))

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
const start = async () => {
  payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    ...(process.env.ENVIRONMENT === 'production' && {
      mongoOptions: {
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PW
      }
    }),
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000);
}

start();

