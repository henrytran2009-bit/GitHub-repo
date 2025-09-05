const express = require("express");
const app = express();

app.use(express.json());

// ✅ Serve homepage and static files from /public
app.use(express.static("public"));

// API route: generate temp email
app.get("/new-email", (req, res) => {
  const random = Math.random().toString(36).substring(2, 10);
  res.json({ email: `${random}@tempmail10min.com` });
});

// API route: inbox (dummy)
app.get("/inbox", (req, res) => {
  res.json({ messages: ["Welcome to Temp Mail!"] });
});

// API route: health
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date() });
});

// ✅ Use Render’s port or 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Temp Mail app running on http://localhost:${PORT}`);
});
