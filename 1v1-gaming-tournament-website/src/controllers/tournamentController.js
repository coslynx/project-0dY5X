const Tournament = require('../models/Tournament');
const User = require('../models/User');
const Game = require('../models/Game');
const Match = require('../models/Match');

const createTournament = async (req, res) => {
  try {
    const { name, game, participants, prizePool } = req.body;

    const tournament = new Tournament({
      name,
      game,
      participants,
      prizePool,
      creator: req.user._id,
    });

    await tournament.save();

    res.status(201).json({ message: 'Tournament created successfully', tournament });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while creating the tournament', error });
  }
};

const getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find().populate('game', 'name').populate('participants', 'username');
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching tournaments', error });
  }
};

const getTournamentById = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id).populate('game', 'name').populate('participants', 'username');
    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.status(200).json(tournament);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching the tournament', error });
  }
};

const updateTournament = async (req, res) => {
  try {
    const { name, game, participants, prizePool } = req.body;

    const tournament = await Tournament.findByIdAndUpdate(req.params.id, {
      name,
      game,
      participants,
      prizePool,
    }, { new: true });

    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }

    res.status(200).json({ message: 'Tournament updated successfully', tournament });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the tournament', error });
  }
};

const deleteTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndDelete(req.params.id);
    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.status(200).json({ message: 'Tournament deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the tournament', error });
  }
};

module.exports = {
  createTournament,
  getTournaments,
  getTournamentById,
  updateTournament,
  deleteTournament,
};