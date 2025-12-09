const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/analysisController');

// Trigger a full analysis (Fetch Figma -> Scan Code -> Compare)
router.post('/analyze', analysisController.runAnalysis);

// Get explanation for a specific mismatch
router.post('/explain', analysisController.getExplanation);

module.exports = router;