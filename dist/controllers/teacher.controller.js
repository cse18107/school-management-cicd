"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _teacherModel = _interopRequireDefault(require("../models/teacher.model.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Create a new teacher
const createTeacher = async (req, res) => {
  try {
    const teacher = new _teacherModel.default(req.body);
    const savedTeacher = await teacher.save();
    res.status(201).json(savedTeacher);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await _teacherModel.default.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Get a teacher by ID
const getTeacherById = async (req, res) => {
  try {
    const teacher = await _teacherModel.default.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({
        error: 'Teacher not found'
      });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Update a teacher by ID
const updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await _teacherModel.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    } // Return updated document and validate input
    );
    if (!updatedTeacher) {
      return res.status(404).json({
        error: 'Teacher not found'
      });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Delete a teacher by ID
const deleteTeacher = async (req, res) => {
  try {
    const deletedTeacher = await _teacherModel.default.findByIdAndDelete(req.params.id);
    if (!deletedTeacher) {
      return res.status(404).json({
        error: 'Teacher not found'
      });
    }
    res.status(200).json({
      message: 'Teacher deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
var _default = exports.default = {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
};