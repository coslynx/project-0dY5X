const express = require('express');
const router = express.Router();

const tournamentController = require('../controllers/tournamentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', tournamentController.getAllTournaments);
router.get('/:id', tournamentController.getTournamentById);

router.post('/', authMiddleware.verifyToken, tournamentController.createTournament);

router.put('/:id', authMiddleware.verifyToken, tournamentController.updateTournament);

router.delete('/:id', authMiddleware.verifyToken, tournamentController.deleteTournament);

module.exports = router;