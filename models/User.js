const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');
const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  mobile: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('applicant','hr','interviewer','admin'), defaultValue: 'applicant' }
}, { tableName: 'users', timestamps: true });
module.exports = User;
