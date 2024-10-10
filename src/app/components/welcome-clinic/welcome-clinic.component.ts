import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome-clinic.component.html',
  styleUrl: './welcome-clinic.component.css'
})
export class WelcomeClinicComponent {
  constructor(private router: Router) {}

  navigateToAddClinic() {
    this.router.navigate(['clinic/add-clinic']);
  }

  navigateToAddDoctor() {
    this.router.navigate(['clinic/add-doctor']);
  }

  navigateToAddPatient() {
    this.router.navigate(['clinic/add-patient']);
  }

  navigateToListPatient() {
    this.router.navigate(['clinic/list-patient']);
  }
}
