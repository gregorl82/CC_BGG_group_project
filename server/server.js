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

  const savingsCollection = db.collection('savings');
  const savingsRouter = createRouter(savingsCollection);
  app.use('/api/savings', savingsRouter);

  const creditCollection = db.collection('credit');
  const creditRouter = createRouter(creditCollection);
  app.use('/api/credit', creditRouter);

  const budgetCollection = db.collection('budget');
  const budgetRouter = createRouter(budgetCollection);
  app.use('/api/budget', budgetRouter);

  const pensionCollection = db.collection('pension');
  const pensionRouter = createRouter(pensionCollection);
  app.use('/api/pension', pensionRouter);

  const travelCollection = db.collection('travel');
  const travelRouter = createRouter(travelCollection);
  app.use('/api/travel', travelRouter);
});

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
