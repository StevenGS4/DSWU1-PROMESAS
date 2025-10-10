const { findByApiKey } = require('../models/user.model');


module.exports = function apiKeyAuth(req, res, next) {
const apiKey = req.header('x-api-key');
if (!apiKey) return res.status(401).json({ error: 'API Key requerida' });
const user = findByApiKey(apiKey);
if (!user) return res.status(403).json({ error: 'API Key inválida' });
req.user = user;
next();
};