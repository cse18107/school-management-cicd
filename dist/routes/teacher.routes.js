"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _teacherController = _interopRequireDefault(require("../controllers/teacher.controller.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = _express.default.Router();

// Create a new teacher
router.post('/', _teacherController.default.createTeacher);

// Get all teachers
router.get('/', _teacherController.default.getAllTeachers);

// Get a teacher by ID
router.get('/:id', _teacherController.default.getTeacherById);

// Update a teacher by ID
router.put('/:id', _teacherController.default.updateTeacher);

// Delete a teacher by ID
router.delete('/:id', _teacherController.default.deleteTeacher);
var _default = exports.default = router;