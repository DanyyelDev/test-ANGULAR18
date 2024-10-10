import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PatientClinic } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class PatientsClinicService {

  private baseUrl = 'http://localhost:8080/api/patient';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<PatientClinic[]> {
    return this.http.get<PatientClinic[]>(`${this.baseUrl}/all`);
  }

  addPatient(patient: PatientClinic): Observable<PatientClinic> {
    return this.http.post<PatientClinic>(`${this.baseUrl}/add`, patient);
  }

  updatePatient(patient: PatientClinic): Observable<PatientClinic> {
    return this.http.put<PatientClinic>(`${this.baseUrl}/update/${patient.id}`, patient);
  }

  deletePatient(id: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
