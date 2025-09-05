const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🎉 Hello World! Your Render test app is running correctly.");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date() });
});

// Use Render's assigned port or 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Test app running on http://localhost:${PORT}`);
});
