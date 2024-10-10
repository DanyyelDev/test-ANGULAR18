export interface Patient {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export interface Clinic {
  id?: number;
  name: string;
  address: string;
  version: number;
}

export interface Doctor {
  id?: number;
  idClinic: number;
  idLicence: string;
  name: string;
  lastname: string;
  specialistType: string;
  version: number;
}

export interface PatientClinic {
  id?: number;
  idDoctor: number;
  name: string;
  lastname: string;
  diagnosis: string;
  version: number;
}