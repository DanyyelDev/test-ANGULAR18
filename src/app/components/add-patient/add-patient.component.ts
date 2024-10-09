import { Component } from '@angular/core';
import { Patient } from '../../types';
import { PatientsService } from '../../services/patients/patients.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  newPatient: Patient = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private patientsService: PatientsService, private router: Router) {}


  onSubmit(): void {
    this.patientsService.addPatient(this.newPatient).subscribe(
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
    this.newPatient = { id: 0, name: '', email: '', phone: '' };
  }
}
