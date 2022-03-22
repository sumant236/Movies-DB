const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    "movie_name": {type: String, required: true},
    "movie_genre": {type: String, required: true},
    "production_year": {type: Number, required: true},
    "budget": {type: Number, required: true}
  })

const Movie = mongoose.model("movies", moviesSchema);

module.exports = Movie