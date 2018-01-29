
let uuid = require('uuid/v4')
let movieTracker = require('./movieTracker');

class Movie {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
    this.id = uuid();
    movieTracker.addMovie(this);
  }
  update(name, rating) {
    if(name){
      this.name = name;
    }
    if(rating){
      this.rating = rating;
    }
  }
  kill() {
    movieTracker.deleteMovie(this)
  }
};

module.exports = Movie
