const { Router } = require('express');
const router = Router();
const fs = require('fs');
const mysql = require('mysql');

          //Connection Mysql      -------------------------
const connection = mysql.createConnection({
host: 'localhost',                      //'localhost'
user: 'ck',                           //'ck'
password: 'cFCCuY74Pw7nl5x4x2ky',                           //'cFCCuY74Pw7nl5x4x2ky'
database: 'Credenciales',               //'Credenciales'
port: '3306'                            
});

connection.connect((err)=>{
    if(err){
      throw err
    }else{
      console.log('Connection success');
    }
});

router.get('/', (req, res)=>{
  res.render('index');
});
                    //Metodo GET para obtener los datos de :nroMatricula dentro de la BD

router.get('/:nroMatricula', (req, res)=>{
  connection.query('SELECT apellido, matricula, titulo, institucion, estado, date_format(fechamat, \'%Y/%m/%d\') as fechamat FROM matriculas WHERE matricula= ?', [req.params.nroMatricula], (err, rows, fields)=>{
    if(err) throw err;
      const matriculadoJson = JSON.stringify(rows);         //Tomar el dato rows y convertirlo a string
      console.log(matriculadoJson);                       //Imprimir el dato en consola
      //fs.writeFileSync('./json/matriculado.json', matriculadoJson); //Guardarlo dentro de matriculado.json
      res.render('matriculado', {datos: rows});
  });
});

module.exports = router;
