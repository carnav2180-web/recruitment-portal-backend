const { Sequelize } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const sequelize = new Sequelize(DATABASE_URL, { logging: false });
module.exports = { sequelize };
