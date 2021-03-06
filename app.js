const userRoute = require ('./routes/user')

const saucesRoute = require ('./routes/sauces')

const path = require('path');

//const sauceSchema = require('./models/sauces');

const express = require ('express');

const bodyParser = require ('body-parser');

const app = express();

const mongoose = require('mongoose');


const user = require('./models/user');

require ("dotenv").config();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(express.json())

  app.use('/api/auth', userRoute)

  app.use('/api/sauces', saucesRoute);

  app.use('/images', express.static(path.join(__dirname, 'images')));

  mongoose.connect(process.env.DATABASE,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
  module.exports = app;

