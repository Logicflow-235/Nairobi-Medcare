export type Role="Patient"| "Doctor"|"Staff";
export type Speciality='General Medicine'|'Dental'|'Pediatrics'|'Gynecology'|'Dermatology'|'Orthopedics'|'Ophthalmology (eye care)'
export type User={
    id:string,
    name:string,
    email:string,
    role:Role,
    speciality?:Speciality,
}
