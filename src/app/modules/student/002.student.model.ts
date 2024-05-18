import { Schema, model, connect } from 'mongoose';
import { Address, Guardian, Student, UserName } from './001.student.interface';


const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String, required: true
    },
    middlename: {
        type: String
    },
    lastName: {
        type: String, required: true
    }
})

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherContactNo: { type: Number, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherContactNo: { type: Number, required: true },
    motherOccupation: { type: String, required: true },
})

const addressSchema = new Schema<Address>({
    house: { type: String, required: true },
    road: { type: String, required: true },
    village: { type: String, required: true },
    district: { type: String, required: true },
    division: { type: String, required: true },
    country: { type: String, required: true },
})


// main schema of the folder
const StudentSchema = new Schema<Student>({
    id: { type: Number, required: true, unique: true },
    name: {
        type: userNameSchema,
        required: [true, 'are bhai bhai bhai! Name field kidar hein?'] //createing custom error message with mongoose.
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: "The gender field can only be one of the following: 'Male', 'Female' "
        },
        required: true
    }, // this concept is called enum.
    email: { type: String, unique: true },
    contantNo: { type: Number, required: true },
    emergencyContactNo: { type: Number },
    bloodGroup: {
        type: String,
        enum: {
            values: ["A", "B", "AB", "O", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            message: '{VALUE} is not valid. ',
        },
    },
    guardian: {
        type: guardianSchema,
        required: true
    },
    presentAddress: {
        type: addressSchema,
        required: true
    },
    permanentAddress: {
        type: addressSchema,
        required: true
    },
    localGuardian: {
        name: {
            type: userNameSchema,
            required: true
        },
        occupation: { type: String, required: true },
        presentAddress: {
            type: addressSchema,
            required: true
        },
        contantNo: { type: String, required: true }
    },
    isActive: { type: Boolean, required: true }
})


// model
export const StudentModel = model<Student>('Student', StudentSchema);