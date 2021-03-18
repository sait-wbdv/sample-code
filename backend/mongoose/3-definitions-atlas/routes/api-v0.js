const mongoose = require('../_connection')
const express = require('express');
const Definition = require('../models/definition')

const router = express.Router();

router.get('/definitions', (req, res) => {
  Definition.find(function(err,definitions){
    if (err) {
      res.sendStatus(404);
    }
    res.json(definitions);
  })
})

router.get('/definitions/:slug', (req, res) => {

  Definition.find({slug: req.params.slug},function(err,definition){
    if (err) {
      res.sendStatus(404)
    }
    res.json(definition);
  })

})

module.exports = router;