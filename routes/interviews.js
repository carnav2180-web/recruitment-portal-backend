const express = require('express');
const Interview = require('../models/Interview');
const Application = require('../models/Application');
const { authMiddleware, requireRole } = require('../middleware/auth');
const router = express.Router();

// public: list interviews (for demo)
router.get('/', async (req, res) => {
  const items = await Interview.findAll();
  res.json(items);
});

// add interview (requires authentication in real app)
router.post('/:applicationId', async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { round, remarks, rating } = req.body;
    const interview = await Interview.create({ application_id: applicationId, round, remarks, rating });
    // update application stage
    const app = await Application.findByPk(applicationId);
    if (app) await app.update({ interview_stage: round });
    res.json({ msg: 'Interview saved', interview });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
