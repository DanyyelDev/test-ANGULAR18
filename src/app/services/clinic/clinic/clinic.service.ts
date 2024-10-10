import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Clinic } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private baseUrl = 'http://localhost:8080/api/patient';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.baseUrl}/all`);
  }

  addPatient(clinic: Clinic): Observable<Clinic> {
    return this.http.post<Clinic>(`${this.baseUrl}/add`, clinic);
  }

  updatePatient(clinic: Clinic): Observable<Clinic> {
    return this.http.put<Clinic>(`${this.baseUrl}/update/${clinic.id}`, clinic);
  }

  deletePatient(id: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
