"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _studentModel = _interopRequireDefault(require("../models/student.model.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Create a new student
const createStudent = async (req, res) => {
  try {
    const student = new _studentModel.default(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await _studentModel.default.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Get a student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await _studentModel.default.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await _studentModel.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    } // Return updated document and validate input
    );
    if (!updatedStudent) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await _studentModel.default.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }
    res.status(200).json({
      message: 'Student deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
var _default = exports.default = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};