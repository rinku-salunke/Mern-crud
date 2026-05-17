// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World! Welcome to the backend server.");
// });

// app.listen(port, () => {
//   console.log(`Server running successfully at: http://localhost:${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Initialize configuration
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Cloud Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🚀 Connected smoothly to MongoDB Atlas Cloud!"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("API is running and database is connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running successfully at: http://localhost:${PORT}`);
});
