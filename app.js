const userRoute = require ('./routes/user')

const saucesRoute = require ('./routes/sauces')

const express = require ('express');

const bodyParser = require ('body-parser');

const app = express();

const mongoose = require('mongoose');

const sauces = require('./models/sauces');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/auth', userRoute)

  app.use(bodyParser.json())

  app.use('/api/sauces', saucesRoute);

  mongoose.connect('mongodb+srv://Nadia:123123123@cluster0.b94si.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
  module.exports = app;
