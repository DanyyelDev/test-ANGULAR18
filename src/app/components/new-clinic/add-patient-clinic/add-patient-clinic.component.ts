import { Component } from '@angular/core';
import { PatientClinic } from '../../../types';
import { Router } from '@angular/router';
import { PatientsClinicService } from '../../../services/clinic/patient-clinic/patients-clinic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-patient-clinic',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './add-patient-clinic.component.html',
  styleUrl: './add-patient-clinic.component.css'
})
export class AddPatientClinicComponent {
  newPatient: PatientClinic = {
    idDoctor: 0,
    name: '',
    lastname: '',
    diagnosis: '',
    version: 1
  };

  constructor(private patientsClinicService: PatientsClinicService, private router: Router) {}


  onSubmit(): void {
    this.patientsClinicService.addPatient(this.newPatient).subscribe(
      (response) => {
        console.log('Paciente agregado', response);
        this.resetForm();
      },
      (error) => {
        console.error('Error al agregar paciente', error);
      }
    );
    this.router.navigate(['']);
  }

  resetForm(): void {
    this.newPatient = { id: 0, idDoctor:0, name: '', lastname: '', diagnosis: '', version: 1 };
  }
}
