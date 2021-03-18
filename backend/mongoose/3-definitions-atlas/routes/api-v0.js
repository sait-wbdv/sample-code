const express = require('express');
const definitions = require('../data/definitions.js');

const router = express.Router();

router.get('/definitions', (req, res) => {
  res.json(definitions);
})

router.get('/definitions/:slug', (req, res) => {
  const definition = definitions.find(function(item){
    return item.slug === req.params.slug;
  })

  if (!definition) {
    res.sendStatus(404);
  }
  res.json(definition);
})

module.exports = router;