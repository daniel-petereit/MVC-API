let controller = {};
let dogTracker = require('./models/movieTracker')
let Movie = require('./models/movie')

controller.getMovies = function(req, res, next) {
  res.status(200).json({data: movieTracker.movies})
}

controller.getMoviesById = function(req, res, next) {
  const id = req.params.id
  const dog = movieTracker.findMovieById(id)
  if (!movie) return next({ status: 404, message: `Could not find movie with id of ${id}` })
  res.json({ data: movie })
}

controller.createMovies = function(req, res, next) {
  const { name, rating } = req.body
  if (!name || !rating) return next({ status: 400, message: `Fields name and rating are required` })
  const movie = new Movie(name, rating)
  res.status(201).json({ data: movie })
}

controller.update = function(req, res, next){
  const id = req.params.id
  const movie = movieTracker.findMovieById(id)
  if (!movie) return next({ status: 404, message: `Could not find movie with id of ${id}` })

  const { name, rating } = req.body
  if (!name || !rating) return next({ status: 400, message: `Fields name and rating are required` })
  dog.update(name, rating)
  res.status(200).json({ data: movie })
}

controller.delete = function(req, res, next){
  const id = req.params.id
  const dog = movieTracker.findMovieById(id)
  if (!movie) return next({ status: 404, message: `Could not find movie with id of ${id}` })
  movie.kill();
  res.status(204).json()
}



module.exports = controller
