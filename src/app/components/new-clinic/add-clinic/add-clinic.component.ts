import { Component } from '@angular/core';
import { Clinic } from '../../../types';
import { ClinicService } from '../../../services/clinic/clinic/clinic.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-clinic',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './add-clinic.component.html',
  styleUrl: './add-clinic.component.css'
})
export class AddClinicComponent {
  newClinic: Clinic = {
    name: '',
    address: '',
    version: 1
  };

  constructor(private clinicService: ClinicService, private router: Router) {}


  onSubmit(): void {
    this.clinicService.addPatient(this.newClinic).subscribe(
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
    this.newClinic = { id: 0,name: '', address: '', version: 1 };
  }
}
