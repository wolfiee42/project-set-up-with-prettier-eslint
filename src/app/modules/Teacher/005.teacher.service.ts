import { Teacher } from "./001.teacher.interface";
import { TeacherModel } from "./002.teacher.model";

const createTeacherToDB = async (teacher: Teacher) => {
    const result = await TeacherModel.create(teacher);
    return result;
}

export const teacherService = {
    createTeacherToDB,
}