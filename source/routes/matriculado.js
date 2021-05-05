const Router  = require('express');
const router = Router();
const matriculado = require('../models/matriculado');

//Encontrar todos los matriculados Solo entorno de desarrollo
// router.get('/', async(res) => {
//   const matriculados = await matriculado.find()
//   res.json(matriculados);
// });

router.post('/nuevo', async(req, res) => {
  const nuevoMatriculado = new matriculado(req.body);
  const matriculadoGuardado = await nuevoMatriculado.save();
  res.json(matriculadoGuardado)
});

//Metodo GET para obtener los datos de :nroMatricula dentro de la BD
router.get('/:nroMatricula', async (req, res)=>{
  const matriculadoBuscado = await matriculado.find({nroMatricula: req.params.nroMatricula})
  res.render('matriculado', {datos: matriculadoBuscado});
});

module.exports = router;
