import { Request, Response } from "express";
import { teacherService } from "./005.teacher.service";

const createTeacher = async (req: Request, res: Response) => {
    try {
        const { teacher } = req.body;
        const result = await teacherService.createTeacherToDB(teacher);
        res.status(200).json({
            success: true,
            message: 'New teacher successfully added to the system.',
            data: result
        });

    } catch (error) {
        console.log(error);
    }
}

export const teacherController = {
    createTeacher,
}