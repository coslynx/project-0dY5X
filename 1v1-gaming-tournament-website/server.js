const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const tournamentRoutes = require('./routes/tournamentRoutes');
const gameRoutes = require('./routes/gameRoutes');
const matchRoutes = require('./routes/matchRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/1v1-gaming-tournament-website', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/users', userRoutes);
app.use('/tournaments', authMiddleware, tournamentRoutes);
app.use('/games', authMiddleware, gameRoutes);
app.use('/matches', authMiddleware, matchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});