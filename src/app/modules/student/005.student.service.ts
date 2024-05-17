import { Student } from "./001.student.interface";
import { StudentModel } from "./002.student.model";

const createStudentToDB = async (student: Student) => {
    const result = await StudentModel.create()
    return result;
}

export const studentServices = {
    createStudentToDB,
}