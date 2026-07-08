export type Status="pending"|"confirmed"|"cancelled";
export type Appointment={
    id:string,
    patientId:string,
    doctorId:string,
    datetime:string,
    status:Status,
}
export type Slot={
    datetime:string,
    isAvailable:boolean,
}