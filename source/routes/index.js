const { Router } = require('express');
const router = Router();

//Router test
router.get('/', (req, res)=>{
  res.send('Hello world');
});

module.exports = router;
