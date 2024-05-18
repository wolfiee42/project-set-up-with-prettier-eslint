import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/003.student.route';
import { teacherRoute } from './app/modules/Teacher/003.teacher.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());


// application routes
app.use('/api/v1/students', StudentRoutes)

app.use('/api/v1/teachers', teacherRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
