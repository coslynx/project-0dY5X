const Tournament = require('../models/Tournament');
const User = require('../models/User');

const tournamentService = {
  createTournament: async (tournamentData) => {
    try {
      const newTournament = new Tournament(tournamentData);
      await newTournament.save();
      return newTournament;
    } catch (error) {
      throw new Error('Error creating tournament');
    }
  },

  getTournamentById: async (tournamentId) => {
    try {
      const tournament = await Tournament.findById(tournamentId);
      return tournament;
    } catch (error) {
      throw new Error('Tournament not found');
    }
  },

  updateTournament: async (tournamentId, tournamentData) => {
    try {
      const updatedTournament = await Tournament.findByIdAndUpdate(tournamentId, tournamentData, { new: true });
      return updatedTournament;
    } catch (error) {
      throw new Error('Error updating tournament');
    }
  },

  deleteTournament: async (tournamentId) => {
    try {
      await Tournament.findByIdAndDelete(tournamentId);
    } catch (error) {
      throw new Error('Error deleting tournament');
    }
  },

  addPlayerToTournament: async (tournamentId, playerId) => {
    try {
      const tournament = await Tournament.findById(tournamentId);
      tournament.players.push(playerId);
      await tournament.save();
      return tournament;
    } catch (error) {
      throw new Error('Error adding player to tournament');
    }
  },

  removePlayerFromTournament: async (tournamentId, playerId) => {
    try {
      const tournament = await Tournament.findById(tournamentId);
      tournament.players = tournament.players.filter(player => player !== playerId);
      await tournament.save();
      return tournament;
    } catch (error) {
      throw new Error('Error removing player from tournament');
    }
  },

  getTournamentsByUser: async (userId) => {
    try {
      const tournaments = await Tournament.find({ creator: userId });
      return tournaments;
    } catch (error) {
      throw new Error('Error fetching tournaments');
    }
  },

  getAllTournaments: async () => {
    try {
      const tournaments = await Tournament.find();
      return tournaments;
    } catch (error) {
      throw new Error('Error fetching tournaments');
    }
  }
};

module.exports = tournamentService;