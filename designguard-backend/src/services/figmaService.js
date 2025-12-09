const axios = require('axios');

exports.getDesignTokens = async (fileKey, token) => {
  try {
    const url = `https://api.figma.com/v1/files/${fileKey}`;
    const response = await axios.get(url, {
      headers: { 'X-Figma-Token': token }
    });

    const styles = response.data.document.children
      .find(node => node.name === 'Page 1' || node.type === 'CANVAS') // Simplified lookup
      ?.children || [];

    // NOTE: This is a simplified extractor. 
    // In a real production app, you'd traverse the whole Figma tree.
    // We will extract basic color rectangles for the demo.
    
    const colors = [];
    
    // Mocking extraction for demo stability if API structure varies
    // Real logic involves recursive traversal of response.data
    return {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#06B6D4', 
        'danger': '#EF4444',
        'background': '#020617'
      },
      typography: {
        'h1': '32px',
        'body': '16px'
      }
    };

  } catch (error) {
    console.error('Figma Fetch Error:', error.message);
    throw new Error('Failed to fetch Figma data');
  }
};