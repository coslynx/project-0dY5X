const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;