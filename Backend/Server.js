const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db"); // 1. Import your database function

// Initialize configuration
dotenv.config();
const app = express();

// 2. Execute the database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running and database is connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running successfully at: http://localhost:${PORT}`);
});