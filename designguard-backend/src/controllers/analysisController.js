const figmaService = require('../services/figmaService');
const scannerService = require('../services/scannerService');
const analyzerService = require('../services/analyzerService');
const geminiService = require('../services/geminiService');

exports.runAnalysis = async (req, res) => {
  const { figmaKey, figmaToken, projectPath } = req.body;

  if (!figmaKey || !figmaToken || !projectPath) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    console.log('1. Fetching Figma Data...');
    const designTokens = await figmaService.getDesignTokens(figmaKey, figmaToken);

    console.log('2. Scanning Local Code...');
    const codeFindings = scannerService.scanCodebase(projectPath);

    console.log('3. Analyzing Mismatches...');
    const mismatches = analyzerService.compare(designTokens, codeFindings);

    // Calculate Health Score
    const totalChecks = codeFindings.length || 1;
    const score = Math.max(0, 100 - Math.round((mismatches.length / totalChecks) * 100));

    res.json({
      score,
      mismatches,
      totalFiles: 12, // Mock for now
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExplanation = async (req, res) => {
  const { mismatch } = req.body;
  const explanation = await geminiService.explainMismatch(mismatch);
  res.json({ explanation });
};