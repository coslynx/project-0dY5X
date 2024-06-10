const Game = require('../models/Game');

const createGame = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    const game = new Game({
      name,
      description,
      category,
    });

    await game.save();

    res.status(201).json({ message: 'Game created successfully', game });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getGames = async (req, res) => {
  try {
    const games = await Game.find();

    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateGame = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    const game = await Game.findByIdAndUpdate(
      req.params.id,
      { name, description, category },
      { new: true }
    );

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.status(200).json({ message: 'Game updated successfully', game });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.status(200).json({ message: 'Game deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame,
};