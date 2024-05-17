export type Student = {
    id: number;
    name: UserName;
    gender: 'Male' | 'Female';
    email?: string;
    contantNo: number;
    emergencyContactNo?: number;
    bloodGroup?: "A" | "B" | "AB" | "O" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    guardian: Guardian;
    presentAddress: Address;
    permanentAddress: Address;
    localGuardian: LocalGuardian;
    isActive: boolean;
}



export type Guardian = {
    fatherName: string;
    fatherContactNo: number;
    fatherOccupation: string;
    motherName: string;
    motherContactNo: number;
    motherOccupation: string;
}

export type Address = {
    house: string;
    road: string;
    village: string;
    district: string;
    division: string;
    country: string
}

export type UserName = {
    firstName: string;
    middlename?: string;
    lastName: string;
};


export type LocalGuardian = {
    name: UserName;
    occupation: string;
    presentAddress: Address;
    contantNo: string;
}