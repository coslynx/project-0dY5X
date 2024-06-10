const Match = require('../models/Match');

const createMatch = async (req, res) => {
  try {
    const { player1, player2, game, tournamentId } = req.body;

    // Logic to create a new match in the database
    const newMatch = await Match.create({
      player1,
      player2,
      game,
      tournamentId,
      status: 'pending'
    });

    res.status(201).json(newMatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMatchStatus = async (req, res) => {
  try {
    const { matchId } = req.params;
    const { status } = req.body;

    // Logic to update the status of a match in the database
    const updatedMatch = await Match.findByIdAndUpdate(matchId, { status }, { new: true });

    res.status(200).json(updatedMatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMatchById = async (req, res) => {
  try {
    const { matchId } = req.params;

    // Logic to retrieve a match by ID from the database
    const match = await Match.findById(matchId);

    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }

    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMatch,
  updateMatchStatus,
  getMatchById
};