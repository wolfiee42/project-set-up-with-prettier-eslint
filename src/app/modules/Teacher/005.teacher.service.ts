import { Teacher } from "./001.teacher.interface";
import { TeacherModel } from "./002.teacher.model";


// storing a teachers data in database
const createTeacherToDB = async (teacher: Teacher) => {
    const result = await TeacherModel.create(teacher);
    return result;
}


// getting all teachers data from database.
const getAllTeachersFromDB = async () => {
    const result = await TeacherModel.find();
    return result;
}

export const teacherService = {
    createTeacherToDB,
    getAllTeachersFromDB,
}