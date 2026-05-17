const mongoose = require('mongoose');

// Function to connect using promise syntax
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("🚀 Connected smoothly to MongoDB Atlas Cloud!"))
    .catch((err) => {
      console.error("❌ Database connection error:", err);
      process.exit(1); // Safely shuts down the app if connection fails
    });
};

module.exports = connectDB;