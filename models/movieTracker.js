
let movieTracker = {movies: [],
                  addMovie: (movie) => {movieTracker.movies.push(movie)},
                  deleteMovie: (movie) => { movieTracker.movies.splice(movieTracker.movies.indexOf(movie), 1)},
                  findMovieById: (id) => {return movieTracker.movies.find(movie => movie.id === id)}}


module.exports = movieTracker
