import express from 'express';
import { teacherController } from './004.teacher.controller';


const router = express.Router();


router.post('/create-teacher', teacherController.createTeacher);

export const teacherRoute = router;