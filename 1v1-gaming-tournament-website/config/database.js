const mongoose = require('mongoose');

const databaseConfig = {
  host: 'localhost',
  port: '27017',
  dbName: '1v1_gaming_tournament',
};

mongoose.connect(`mongodb://${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;