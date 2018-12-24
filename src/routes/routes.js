const express = require('express');
const router  = express.Router();
const model   =
router.get('/', ( req, res ) => {
  
  res.render('index', {
    title: "To Do App",
    task: []
  })
})

module.exports = router;
