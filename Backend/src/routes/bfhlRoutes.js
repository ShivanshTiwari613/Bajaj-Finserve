// routes/bfhlRoutes.js

const express = require('express');
const router = express.Router();
const { getOperationCode, postBfhl } = require('../controllers/bfhlControllers');

// GET /bfhl endpoint
router.get('/bfhl', getOperationCode);

// POST /bfhl endpoint
router.post('/bfhl', postBfhl);

module.exports = router;
