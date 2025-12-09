exports.compare = (tokens, codeFindings) => {
    const mismatches = [];
    const validColors = Object.values(tokens.colors).map(c => c.toLowerCase());
  
    codeFindings.forEach(finding => {
      let isMismatch = false;
      let expected = 'Unknown';
  
      // 1. Color Analysis
      if (finding.type === 'color') {
        if (!validColors.includes(finding.value.toLowerCase())) {
          isMismatch = true;
          expected = 'Use a design token (e.g., text-primary)';
        }
      }
  
      // 2. Spacing/Font Analysis (Simple logic for demo)
      if (finding.type === 'spacing/font') {
        // If it's not a multiple of 4 (Tailwind standard), flag it
        const val = parseInt(finding.value);
        if (val % 4 !== 0) {
          isMismatch = true;
          expected = 'Multiple of 4px (Tailwind scale)';
        }
      }
  
      if (isMismatch) {
        mismatches.push({
          ...finding,
          message: `Hardcoded ${finding.type} found: ${finding.value}`,
          expected: expected,
          severity: 'high'
        });
      }
    });
  
    return mismatches;
  };