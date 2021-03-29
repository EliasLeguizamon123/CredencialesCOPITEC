const { Router } = require('express');
const router = Router();

//Router test
router.get('/', (req, res)=>{
  res.render('index');
});

module.exports = router;
