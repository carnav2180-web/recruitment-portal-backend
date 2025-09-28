const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');
const Application = sequelize.define('Application', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  experience_years: { type: DataTypes.INTEGER },
  current_role: { type: DataTypes.STRING },
  organisation: { type: DataTypes.STRING },
  working_since: { type: DataTypes.DATE },
  current_status: { type: DataTypes.STRING },
  resume_url: { type: DataTypes.STRING },
  video_url: { type: DataTypes.STRING },
  hr_rating: { type: DataTypes.ENUM('A','B','C','NA'), defaultValue: 'NA' },
  interview_stage: { type: DataTypes.INTEGER, defaultValue: 0 },
  final_status: { type: DataTypes.ENUM('Selected','Hold','Rejected'), defaultValue: 'Hold' }
}, { tableName: 'applications', timestamps: true });
module.exports = Application;
