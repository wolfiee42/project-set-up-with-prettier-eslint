import { Student } from "./001.student.interface";
import { StudentModel } from "./002.student.model";

// create student
const createStudentToDB = async (student: Student) => {
    const result = await StudentModel.create(student);
    return result;
}


// get a single students information
const getSingleStudentFromDB = async (email: string) => {
    const result = await StudentModel.findOne({ email: email })
    return result;
}


// get all student information
const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find();
    return result;
}



export const studentServices = {
    createStudentToDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB
}