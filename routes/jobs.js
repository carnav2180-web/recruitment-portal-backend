const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.findAll();
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const { title, location, description } = req.body;
  const job = await Job.create({ title, location, description });
  res.json(job);
});

module.exports = router;
