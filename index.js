const express = require("express");
const app = express();

// ✅ Serve homepage and static files from /public
app.use(express.static("public"));

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date() });
});

// ✅ Use Render's port or 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ App running on http://localhost:${PORT}`);
});
