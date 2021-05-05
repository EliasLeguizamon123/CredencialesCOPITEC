const express = require('express');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config({ path: './.env' })

const app = express();

var matriculadoRouter = require('./routes/matriculado');

                    //Settings            -------------------------

app.set('port', process.env.PORT);
  //Need change pug for React
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
require('./database/database.js')

                    //Middlewares         -------------------------

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));

                    //Routes              -------------------------

app.use(require('./routes/index.js'));
app.use('/matriculado', matriculadoRouter);

                    //Statics             -------------------------

app.use(express.static(path.join(__dirname, 'public')));

                   //404 handle
app.use((req, res, next)=>{
  res.status(404).send('404 Page not found');
});

module.exports = app;
