import { Component } from '@angular/core';
import { Doctor } from '../../../types';
import { Router } from '@angular/router';
import { DoctorClinicService } from '../../../services/clinic/doctor/doctor-clinic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {

  newDoctor: Doctor = {
    idClinic: 0,
    idLicence: '',
    name: '',
    lastname: '',
    specialistType: '',
    version: 1
  };

  constructor(private doctorClinicService: DoctorClinicService, private router: Router) { }


  onSubmit(): void {
    this.doctorClinicService.addDoctor(this.newDoctor).subscribe(
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
    this.newDoctor = { id: 0, idClinic: 0, idLicence: '', name: '', lastname: '', specialistType:'' , version: 1 };
  }
}
