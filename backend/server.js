const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mealRouter = require('./routes/mealRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/meals', mealRouter);
app.use('/api/orders', orderRouter);

const rootDir = path.join(__dirname, '../');

//Serving static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(rootDir, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(rootDir, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
