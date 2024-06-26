import { TStudent } from "./001.student.interface";
import { Student } from "./002.student.model";

// create student
const createStudentToDB = async (studentInfo: TStudent) => {

    // custom static method
    if (await Student.isStudentExist(studentInfo.id)) {
        throw new Error('User already exist!')
    }


    // built-in static methods
    const result = await Student.create(studentInfo);


    //  built-in instance methods

    // const student = new Student(studentInfo);
    // const result = await student.save();



    // custom instanse method

    // const student = new Student(studentInfo);

    // if (await student.isStudentExist(studentInfo.id)) {
    //     throw new Error('User already exist!')
    // }

    // const result = await student.save();
    return result;
}


// get a single students information
const getSingleStudentFromDB = async (email: string) => {

    // without aggregate
    // const result = await Student.findOne({ email: email });

    // with aggregate
    const result = await Student.aggregate([
        { $match: { email: email } }
    ])
    return result;
}

// get a single students information
const deleteStudentFromDB = async (id: string) => {
    const result = await Student.updateOne({ id }, { isDeleted: true })
    return result;
}


// get all student information 
const getAllStudentsFromDB = async () => {
    const result = await Student.find();
    return result;
}



export const studentServices = {
    createStudentToDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB
}