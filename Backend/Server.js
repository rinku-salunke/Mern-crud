const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const studentRoutes = require("./Routes/StudentRoutes"); // 1. Import your new student routes

// Initialize configuration
dotenv.config();
const app = express();

// Execute database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// 2. Link Student Routes to an API endpoint
app.use("/api/students", studentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running successfully at: http://localhost:${PORT}`);
});
