const express = require('express');
const slowDown = require('express-slow-down');
const dotenv = require('dotenv');
const routes = require('./routes/weatherRoutes');

dotenv.config();
const app = express();

const speedLimiter = slowDown({
  windowMs: 10 * 60 * 1000, // 1 minute
  delayAfter: 100, // allow 100 requests per minute, then...
  delayMs: () => 500, // begin adding 500ms of delay per request above 100:
  handler: (req, res) => {
      res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
});

app.use('/api/v1', speedLimiter, routes);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
