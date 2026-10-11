// import required modules
const express = require('express');
const { hexToRgb } = require('./hexToRgb');
const app = express();
const PORT = process.env.PORT || 3000;
// Main API route: convert hex → RGB
app.get('/hex-to-rgb', (req, res) => {
  const { hex } = req.query;

  if (!hex) {
    return res.status(400).json({ error: 'Missing hex parameter' });
  }

  try {
    const rgb = hexToRgb(hex);
    return res.json({ hex, rgb });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});
// Start server only when executed directly (not during tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port 3000`);
  });
}

module.exports = app;
