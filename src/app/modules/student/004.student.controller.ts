import { Request, Response } from "express";
import { studentServices } from "./005.student.service";
// import studentValidationSchema from "./006.student.joi.validation";
import z from 'zod';
import { studentValidationSchema } from "./007.student.zod.validation";
import { Student } from "./002.student.model";

// create student
const createStudent = async (req: Request, res: Response) => {
    try {

        const { student: studentData } = req.body;

        // using for zod
        const zodParsedData = studentValidationSchema.parse(studentData)
        const result = await studentServices.createStudentToDB(zodParsedData);


        // using for joi


        // const { error } = studentValidationSchema.validate(studentData);
        // console.log(error);
        // if (error) {
        //     res.status(500).json({
        //         success: false,
        //         message: 'Something Went Wrong!',
        //         error
        //     })
        // }



        res.status(200).json({
            success: true,
            message: 'New student successfully added to the system.',
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong!',
            error: error
        })
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

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong!',
            error: error
        })
    }
}


// delete students information
const deleteSingleStudent = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await studentServices.deleteStudentFromDB(id);

        res.status(200).json({
            success: true,
            message: 'The students information is now deleted.',
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong!',
            error: error
        })
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
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong!',
            error: error
        })
    }
}



export const studentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    deleteSingleStudent
}