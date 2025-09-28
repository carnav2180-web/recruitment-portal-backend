const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(401).json({ msg: 'Invalid user' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Unauthorized', error: err.message });
  }
}

function requireRole(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).json({ msg: 'Forbidden' });
    next();
  };
}

module.exports = { authMiddleware, requireRole };
