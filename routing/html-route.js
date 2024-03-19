//user will get notes or index pages used sendFile() method in  function 
const router = require('express').Router();
const path = require('path');
  // for notes page
  router.get('/notes', function (req, res){
    res.sendFile(path.join(__dirname , '../public/notes.html'));
  });
// for (home) index page 
  router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname , '../public/index.html'));
  });
module.exports = router;