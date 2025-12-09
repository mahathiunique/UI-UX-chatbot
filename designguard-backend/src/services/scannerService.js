const glob = require('glob');
const fs = require('fs');
const path = require('path');

exports.scanCodebase = (projectPath) => {
  // Find all JS, JSX, TS, TSX, CSS files
  const files = glob.sync(`${projectPath}/src/**/*.{js,jsx,ts,tsx,css}`);
  const findings = [];

  const hexRegex = /#[0-9a-fA-F]{3,6}/g;
  const pxRegex = /\d+px/g;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      // Check for Hardcoded Hex Colors
      let match;
      while ((match = hexRegex.exec(line)) !== null) {
        findings.push({
          file: path.relative(projectPath, file),
          line: index + 1,
          type: 'color',
          value: match[0],
          context: line.trim()
        });
      }

      // Check for Hardcoded Pixels (Generic check)
      while ((match = pxRegex.exec(line)) !== null) {
        findings.push({
          file: path.relative(projectPath, file),
          line: index + 1,
          type: 'spacing/font',
          value: match[0],
          context: line.trim()
        });
      }
    });
  });

  return findings;
};