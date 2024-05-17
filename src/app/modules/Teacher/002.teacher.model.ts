import { Schema, model } from "mongoose";
import { Teacher } from "./001.teacher.interface";

const TeacherSchema = new Schema<Teacher>({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    experience: { type: Number, required: true },
    email: { type: String, required: true },
    contactNo: { type: Number, required: true },
})

const TeacherModel = model<Teacher>('Teachers', TeacherSchema);
