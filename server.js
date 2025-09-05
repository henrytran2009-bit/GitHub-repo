import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ads.txt
app.get("/ads.txt", (req, res) => {
  res.type("text/plain");
  res.send("google.com, pub-9284100006131640, DIRECT, f08c47fec0942fa0");
});

// robots.txt
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Disallow:

Sitemap: https://tempmail10min.com/sitemap.xml`);
});

// sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.type("application/xml");
  res.sendFile(path.join(__dirname, "public", "sitemap.xml"));
});

// Serve static assets
app.use(express.static("public"));

// Fallback SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ tempmail10min.com server running on port ${PORT}`));