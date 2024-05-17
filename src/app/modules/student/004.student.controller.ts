import { Request, Response } from "express";
import { studentServices } from "./005.student.service";

const createStudent = async (req: Request, res: Response) => {
    try {

        const student = req.body;
        const result = await studentServices.createStudentToDB(student);

        res.status(200).json({
            success: true,
            message: 'New student successfully added to the system',
            data: result
        })

    } catch (error) {
        console.log(error);
    }
}

export const studentController = {
    createStudent,
}