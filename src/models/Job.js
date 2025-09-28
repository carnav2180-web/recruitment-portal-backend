const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');
const Job = sequelize.define('Job', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.ENUM('open','closed'), defaultValue: 'open' }
}, { tableName: 'jobs', timestamps: true });
module.exports = Job;
