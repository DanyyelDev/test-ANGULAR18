import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Doctor, PatientClinic } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class DoctorClinicService {

  private baseUrl = 'http://localhost:8080/api/doctor';

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/all`);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.baseUrl}/add`, doctor);
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.baseUrl}/update/${doctor.id}`, doctor);
  }

  deleteDoctor(id: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
