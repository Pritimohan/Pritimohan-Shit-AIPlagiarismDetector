import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { upload } from './middlewares/multer.middleware.js';
import { detectPlagiarism } from './Controller/plagiarismDetectorController.js'



dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Routes
app.post('/api', upload.single("file"), detectPlagiarism);
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to the Plagiarism Detector API' });
});


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

