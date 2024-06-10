const Game = require('../models/Game');

const createGame = async (gameData) => {
  try {
    const newGame = new Game(gameData);
    const savedGame = await newGame.save();
    return savedGame;
  } catch (error) {
    throw new Error('Error creating game');
  }
};

const getGameById = async (gameId) => {
  try {
    const game = await Game.findById(gameId);
    return game;
  } catch (error) {
    throw new Error('Error getting game by ID');
  }
};

const getAllGames = async () => {
  try {
    const games = await Game.find();
    return games;
  } catch (error) {
    throw new Error('Error getting all games');
  }
};

const updateGame = async (gameId, gameData) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(gameId, gameData, { new: true });
    return updatedGame;
  } catch (error) {
    throw new Error('Error updating game');
  }
};

const deleteGame = async (gameId) => {
  try {
    await Game.findByIdAndDelete(gameId);
    return 'Game deleted successfully';
  } catch (error) {
    throw new Error('Error deleting game');
  }
};

module.exports = {
  createGame,
  getGameById,
  getAllGames,
  updateGame,
  deleteGame,
};