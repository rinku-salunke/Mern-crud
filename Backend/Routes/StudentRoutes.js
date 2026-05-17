const express = require("express");
const router = express.Router();
const Student = require("../Models/Student");

// 1. SAVE A NEW STUDENT (Create)
// POST http://localhost:5000/api/students/add
router.post("/add", (req, res) => {
  const newStudent = new Student(req.body);
  newStudent
    .save()
    .then((data) => res.status(201).json({ message: "Student saved successfully!", data }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// 2. EDIT AN EXISTING STUDENT (Update)
// PUT http://localhost:5000/api/students/edit/:id
router.put("/edit/:id", (req, res) => {
  // { new: true, runValidators: true } ensures you get the updated document back and validations apply
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((updatedStudent) => {
      if (!updatedStudent) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json({ message: "Student updated successfully!", updatedStudent });
    })
    .catch((err) => res.status(400).json({ error: err.message }));
});

// 3. DELETE A STUDENT (Delete)
// DELETE http://localhost:5000/api/students/delete/:id
router.delete("/delete/:id", (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then((deletedStudent) => {
      if (!deletedStudent) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json({ message: "Student deleted successfully!", deletedStudent });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;