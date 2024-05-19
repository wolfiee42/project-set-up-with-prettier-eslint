// craeting a joi Validationschema validation using joi

import Joi from "joi";

const userNameValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    middlename: Joi.string().optional(),
    lastName: Joi.string().required(),
});

const addressValidationSchema = Joi.object({
    house: Joi.string().required(),
    road: Joi.string().required(),
    village: Joi.string().required(),
    district: Joi.string().required(),
    division: Joi.string().required(),
    country: Joi.string().required(),
});

const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherContactNo: Joi.number().required(),
    fatherOccupation: Joi.string().required(),
    motherName: Joi.string().required(),
    motherContactNo: Joi.number().required(),
    motherOccupation: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
    name: userNameValidationSchema.required(),
    occupation: Joi.string().required(),
    presentAddress: addressValidationSchema.required(),
    contantNo: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
    id: Joi.number().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('Male', 'Female').required(),
    email: Joi.string().optional().email(),
    contantNo: Joi.number().required(),
    emergencyContactNo: Joi.number().optional(),
    bloodGroup: Joi.string().allow(null, '')
        .valid('A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .optional(),
    guardian: guardianValidationSchema.required(),
    presentAddress: addressValidationSchema.required(),
    permanentAddress: addressValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    isActive: Joi.boolean().required(),
});

export default studentValidationSchema;