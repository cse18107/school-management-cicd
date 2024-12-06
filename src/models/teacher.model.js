import mongoose from 'mongoose';

// Define the schema
const teacherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [3, 'Name must be at least 3 characters long'],
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
        },
        subject: {
            type: String,
            required: [true, 'Subject is required'],
            trim: true,
        },
        age: {
            type: Number,
            min: [18, 'Age must be at least 18'],
            max: [70, 'Age cannot exceed 70'],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt`
        versionKey: false, // Hides the `__v` version key
    }
);

// Virtuals (optional, e.g., fullName)
teacherSchema.virtual('info').get(function () {
    return `${this.name} teaches ${this.subject}`;
});

// Middleware (optional)
teacherSchema.pre('save', function (next) {
    console.log(`Saving teacher: ${this.name}`);
    next();
});

// Export the model
const Teacher = mongoose.model('Teacher', teacherSchema);
export default {Teacher};
