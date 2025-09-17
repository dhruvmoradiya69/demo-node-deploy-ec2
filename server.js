const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Default to production port (3000), dev port (3001)
const PORT =
  process.env.NODE_ENV === "production"
    ? process.env.PORT || 3000
    : process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
