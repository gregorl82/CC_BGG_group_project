const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('financial_data');
  const topicsCollection = db.collection('topics');
  const topicsRouter = createRouter(topicsCollection);
  app.use('/api/topics', topicsRouter);
});

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
