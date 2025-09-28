// Run this once to sync the database tables
require('dotenv').config();
(async () => {
  const { sequelize } = require('./models/db');
  const { initModels } = require('./models/initModels');
  try {
    initModels(); // define associations
    await sequelize.sync({ alter: true });
    console.log('Database synced');
    process.exit(0);
  } catch (err) {
    console.error('Sync error', err);
    process.exit(1);
  }
})();
