import express from 'express';
import studentRoutes from './src/routes/student.routes.js';
import teacherRoutes from './src/routes/teacher.routes.js';
import { mongoose } from 'mongoose';
const app = express();


// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://soumodeep:cse18107@cluster0.d112f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
}).catch((err) => {
    console.error('Database connection error:', err);
});

// Routes
app.use('/api/teachers', teacherRoutes);
// Routes
app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    // console.log("Fetching")
    return res.status(200).json({msg: "ok with changes"});
})

// Start the server


export default app;