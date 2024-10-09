import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  navigateToAddPatient() {
    this.router.navigate(['add-patient']);
  }

  navigateToViewPatients() {
    this.router.navigate(['view-patients']);
  }

  navigateToContact() {
    this.router.navigate(['contact']);
  }
}
