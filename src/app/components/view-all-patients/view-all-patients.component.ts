import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PatientsService } from '../../services/patients/patients.service';
import { Patient } from '../../types';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EditPatientDialogComponent } from '../edit-patient-dialog/edit-patient-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-all-patients',
  standalone: true,
  imports: [CommonModule, MatIconModule, HttpClientModule],
  templateUrl: './view-all-patients.component.html',
  styleUrl: './view-all-patients.component.css'
})
export class ViewAllPatientsComponent {

  patients: Patient[] = [];

  constructor(private patientsService: PatientsService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    console.log(this.patientsService.getPatients());

    this.patientsService.getPatients().subscribe(
      (data: Patient[]) => {
        this.patients = data;
      },
      (error) => {
        console.error('Error fetching patients', error);
      }
    );
  }

  deletePatient(id: number): void {
    this.patientsService.deletePatient(id).subscribe(
      () => {
        console.log(`Deleted patient with id: ${id}`);
        this.patients = this.patients.filter(patient => patient.id !== id);
      },
      (error) => {
        console.error('Error deleting patient', error);
      }
    );
  }

  updatePatient(id: number): void {
    const patientToEdit = this.patients.find(patient => patient.id === id);

    if (patientToEdit) {
      const dialogRef = this.dialog.open(EditPatientDialogComponent, {
        data: patientToEdit
      });

      dialogRef.afterClosed().subscribe((result: Patient) => {
        if (result) {
          this.patientsService.updatePatient(result).subscribe(updatedPatient => {
            const index = this.patients.findIndex(patient => patient.id === updatedPatient.id);
            this.patients[index] = updatedPatient;
          });
        }
      });
    }
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

}
