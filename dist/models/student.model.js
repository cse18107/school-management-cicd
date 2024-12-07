"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Define the schema
const studentSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [5, 'Age must be at least 5'],
    max: [100, 'Age cannot exceed 100']
  },
  grade: {
    type: String,
    required: [true, 'Grade is required'],
    trim: true,
    enum: ['A', 'B', 'C', 'D', 'E', 'F'] // Acceptable grades
  },
  subjects: {
    type: [String],
    default: [],
    validate: {
      validator: value => Array.isArray(value) && value.length > 0,
      message: 'Subjects should be a non-empty array of strings'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  // Automatically adds `createdAt` and `updatedAt`
  versionKey: false // Hides the `__v` version key
});

// Virtuals (optional, e.g., fullName for additional info)
studentSchema.virtual('profile').get(function () {
  return `${this.name} (${this.age} years old) is in grade ${this.grade}`;
});

// Middleware (optional)
studentSchema.pre('save', function (next) {
  console.log(`Saving student: ${this.name}`);
  next();
});

// Export the model
const Student = _mongoose.default.model('Student', studentSchema);
var _default = exports.default = {
  Student
};