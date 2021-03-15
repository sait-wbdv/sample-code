const express = require('express');
const router = express.Router();

router.use(function(req, res, next){
  res.locals = {
    siteTitle: 'SAIT WBDDV',
    tagline: 'Web Developer Fast Track - Winter 2021',
    copyright: 'Tony Grimes. MIT License.'
  }
  next();
})

router.get('/',function(req,res){
  res.render('pages/index',{pageTitle: 'Program Schedule'});
})

router.get('/library',function(req,res){
  res.render('pages/library',{pageTitle: 'Library'});
})

router.get('/exercises',function(req,res){
  res.render('pages/exercises',{pageTitle: 'Exercises'});
})

module.exports = router;