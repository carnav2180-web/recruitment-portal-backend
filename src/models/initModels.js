// define associations after all models are loaded
const User = require('./User');
const Job = require('./Job');
const Application = require('./Application');
const Interview = require('./Interview');

function initModels() {
  User.hasMany(Application, { foreignKey: 'user_id' });
  Application.belongsTo(User, { foreignKey: 'user_id' });

  Job.hasMany(Application, { foreignKey: 'job_id' });
  Application.belongsTo(Job, { foreignKey: 'job_id' });

  Application.hasMany(Interview, { foreignKey: 'application_id' });
  Interview.belongsTo(Application, { foreignKey: 'application_id' });

  User.hasMany(Interview, { foreignKey: 'interviewer_id' });
  Interview.belongsTo(User, { foreignKey: 'interviewer_id' });
}

module.exports = { initModels };
