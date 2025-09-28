const express = require('express');
const multer = require('multer');
const Application = require('../models/Application');
const { initModels } = require('../models/initModels');
const path = require('path');
const fs = require('fs');

// local uploads (for quick testing) - in production use Cloudinary / S3
const uploadDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
const storage = multer.diskStorage({ destination: uploadDir, filename: (req,file,cb)=>cb(null, Date.now()+'_'+file.originalname) });
const upload = multer({ storage });

const router = express.Router();

router.get('/', async (req, res) => {
  const apps = await Application.findAll();
  res.json(apps);
});

router.post('/', upload.fields([{ name: 'resume' }, { name: 'video' }]), async (req, res) => {
  try {
    const { user_id, job_id, experience_years, current_role, organisation, working_since, current_status } = req.body;
    const resume = req.files?.resume?.[0];
    const video = req.files?.video?.[0];
    const app = await Application.create({
      user_id, job_id, experience_years, current_role, organisation, working_since, current_status,
      resume_url: resume ? `/uploads/${path.basename(resume.path)}` : null,
      video_url: video ? `/uploads/${path.basename(video.path)}` : null
    });
    res.json({ msg: 'Application submitted', application: app });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
