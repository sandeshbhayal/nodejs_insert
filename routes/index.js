var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save/submit' , function(req,res , next){
  sid = req.body.studentID;
  cid = req.body.courseID;
  res.redirect('/student/'+sid+'/course/'+cid+'') ; 
  //IF Data Is provide in JSON
  //res.json(req.body);
});

router.get('/student/:id/course/:cid', function(req, res, next) {
  res.render('student', { title: 'Student Express' , result : req.params });
  //res.json(req.params);
});

module.exports = router;