import express from 'express';
import { teacherController } from './004.teacher.controller';


const router = express.Router();

// create A single teacher
router.post('/create-teacher', teacherController.createTeacher);


// display all teachers
router.get('/', teacherController.getAllTeachers)

export const teacherRoute = router;