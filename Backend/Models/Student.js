const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    rollNumber: { type: Number, required: true, unique: true },
    grade: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);