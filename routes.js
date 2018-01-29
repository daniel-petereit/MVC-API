
let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser')
const controller = require('./controller')

router.use(bodyParser.json())

router.get('/movies', (req, res, next) => {
  controller.getMovies(req, res, next)
})

router.get('/movies/:id', (req, res) => {
  controller.getMoviesById(req, res, next)
})

router.post('/movies', (req, res) => {
  controller.createMovies(req, res, next)
})

router.put('/movies/:id', (req, res) => {
  controller.update(req, res, next)
})

router.delete('/movies/:id', (req, res) => {
  controller.delete(req, res, next)
})


module.exports = router
