const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');
const Interview = sequelize.define('Interview', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  round: { type: DataTypes.INTEGER, allowNull: false },
  remarks: { type: DataTypes.TEXT },
  rating: { type: DataTypes.ENUM('A','B','C','Rejected') }
}, { tableName: 'interviews', timestamps: true });
module.exports = Interview;
