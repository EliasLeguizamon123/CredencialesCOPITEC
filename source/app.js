const express = require('express');
      morgan = require('morgan');
      path = require('path');
      mysql = require('mysql');
const app = express();

var matriculadoRouter = require('./routes/matriculado');

                    //Settings            -------------------------

app.set('port', 3000);

                    //Middlewares         -------------------------

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Validate dynamic route of matriculado
matriculadoRouter.param('nroMatricula', (req, res, next, nroMatricula)=>{
  if(nroMatricula == ''){
    console.log('Error No introdujo un nro de matricula');
  }else{
    req.nroMatricula = nroMatricula;
    next()
  }
});

                    //Routes              -------------------------

app.use(require('./routes/index.js'));
app.use('/matriculado', matriculadoRouter);

                    //Statics             -------------------------

app.use(express.static(path.join(__dirname, 'public')));

                   //404 handle
app.use((req, res, next)=>{
  res.status(404).send('404 Page no found');
});

module.exports = app;
