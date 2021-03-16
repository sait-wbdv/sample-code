const express = require('express')
const router = express.Router()
const config = require('../config')

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

module.exports = router;