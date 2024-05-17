import express from 'express';
import { studentController } from './004.student.controller';

const router = express.Router();

// is going to call a controller funciton
router.post('/create-student', studentController.createStudent)


// getting a single students data 
router.get('/:email', studentController.getSingleStudent)


// getting all students data alLtogether
router.get('/', studentController.getAllStudents)

export const StudentRoutes = router;