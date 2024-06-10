const Match = require('../models/Match');

const createMatch = async (data) => {
  try {
    const newMatch = new Match(data);
    const savedMatch = await newMatch.save();
    return savedMatch;
  } catch (error) {
    throw new Error('Unable to create match');
  }
};

const getMatchById = async (matchId) => {
  try {
    const match = await Match.findById(matchId);
    if (!match) {
      throw new Error('Match not found');
    }
    return match;
  } catch (error) {
    throw new Error('Unable to retrieve match');
  }
};

const updateMatchResult = async (matchId, result) => {
  try {
    const updatedMatch = await Match.findByIdAndUpdate(matchId, { result }, { new: true });
    if (!updatedMatch) {
      throw new Error('Match not found');
    }
    return updatedMatch;
  } catch (error) {
    throw new Error('Unable to update match result');
  }
};

const deleteMatch = async (matchId) => {
  try {
    const deletedMatch = await Match.findByIdAndDelete(matchId);
    if (!deletedMatch) {
      throw new Error('Match not found');
    }
    return deletedMatch;
  } catch (error) {
    throw new Error('Unable to delete match');
  }
};

module.exports = {
  createMatch,
  getMatchById,
  updateMatchResult,
  deleteMatch,
};