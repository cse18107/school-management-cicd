"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _studentController = _interopRequireDefault(require("../controllers/student.controller.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = _express.default.Router();

// Create a new student
router.post('/', _studentController.default.createStudent);

// Get all students
router.get('/', _studentController.default.getAllStudents);

// Get a student by ID
router.get('/:id', _studentController.default.getStudentById);

// Update a student by ID
router.put('/:id', _studentController.default.updateStudent);

// Delete a student by ID
router.delete('/:id', _studentController.default.deleteStudent);
var _default = exports.default = router;