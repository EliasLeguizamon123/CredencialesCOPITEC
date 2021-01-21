const { Router } = require('express');
const router = Router();
const fs = require('fs');
const matriculado = [];

          //Connection Mysql      -------------------------
var connection = mysql.createConnection({
host: 'localhost',                      //'localhost'
user: 'root',                           //'ck'
password: '',                           //'cFCCuY74Pw7nl5x4x2ky'
database: 'Credenciales',               //'Credenciales'
});

connection.connect((err)=>{
    if(err){
      throw err
    }else{
      console.log('Connection success');
    }
});

                    //Metodo GET para obtener los datos de :nroMatricula dentro de la BD

router.get('/:nroMatricula', (req, res)=>{
  connection.query('SELECT * FROM matriculas WHERE matricula= ?', [req.params.nroMatricula], (err, rows, fields)=>{
    if(err) throw err;
      let matriculadoJson = JSON.stringify(rows);         //Tomar el dato rows y convertirlo a string
      console.log(matriculadoJson);                       //Imprimir el dato en consola
      fs.writeFileSync('./source/json/matriculado.json', matriculadoJson); //Guardarlo dentro de matriculado.json

      res.json(rows);
  });
});


module.exports = router;
