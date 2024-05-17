import { Schema, model, connect } from 'mongoose';
import { Address, Guardian, Student, Student, Student, UserName } from './001.student.interface';


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

const StudentSchema = new Schema<Student>({
    id: { type: Number },
    name: userNameSchema,
    gender: ['Male', 'Female'], // this concept is called enum.
    email: { type: String },
    contantNo: { type: Number, required: true },
    emergencyContactNo: { type: Number },
    bloodGroup: [
        "A", "B", "AB", "O", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
    ],
    guardian: guardianSchema,
    presentAddress: addressSchema,
    permanentAddress: addressSchema,
    localGuardian: {
        name: userNameSchema,
        occupation: { type: String, required: true },
        presentAddress: addressSchema,
        contantNo: { type: String, required: true }
    },
    isActive: { type: Boolean, required: true }
})


// model
const Student = model<Student>('Student', StudentSchema);