import { Request, Response } from "express";
import { studentServices } from "./005.student.service";


// create student
const createStudent = async (req: Request, res: Response) => {
    try {

        const { student: studentData } = req.body;
        const result = await studentServices.createStudentToDB(studentData);

        res.status(200).json({
            success: true,
            message: 'New student successfully added to the system.',
            data: result
        })

    } catch (error) {
        console.log(error);
    }
}

// get a single students information
const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const result = await studentServices.getSingleStudentFromDB(email);

        res.status(200).json({
            success: true,
            message: 'The students information is now live',
            data: result
        })

    } catch (error) {
        console.log(error);
    }
}


// get all student information
const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await studentServices.getAllStudentsFromDB();

        res.status(200).json({
            success: true,
            message: 'The student list is now live!',
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const studentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
}