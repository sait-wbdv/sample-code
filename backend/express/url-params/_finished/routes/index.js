const express = require('express')
const router = express.Router()
const config = require('../config')
const definitions = require('../data/definitions')

router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: "Program Schedule"})
})

router.get('/library', (req, res) => {
  res.render('pages/library', {pageTitle: "WBDV Library"})
})

router.get('/exercises', (req, res) => {
  res.render('pages/exercises', {pageTitle: "WBDV Exercises"})
})

router.get('/definitions', (req, res) => {
  res.render('pages/definition-list', {pageTitle: "Put a loop on it"})
})

router.get('/definitions/:slug', (req, res) => {
  // TODO: Sanititze `req.params.slug`

  const definition = definitions.find(function(def) {
    return def.slug === req.params.slug;
  })

  if (!definition) res.sendStatus(404);

  res.render('pages/definition-item', {
    pageTitle: definition.term,
    definition: definition
  })

})

module.exports = router;