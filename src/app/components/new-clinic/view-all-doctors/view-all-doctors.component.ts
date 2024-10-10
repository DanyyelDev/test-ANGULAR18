import { Component } from '@angular/core';
import { Doctor } from '../../../types';
import { DoctorClinicService } from '../../../services/clinic/doctor/doctor-clinic.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { EditDoctorDialogComponent } from '../../edit-doctor-dialog/edit-doctor-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-all-doctors',
  standalone: true,
  imports: [CommonModule, MatIconModule, HttpClientModule],
  templateUrl: './view-all-doctors.component.html',
  styleUrl: './view-all-doctors.component.css'
})
export class ViewAllDoctorsComponent {

  doctors: Doctor[] = [];

  constructor(private doctorClinicService: DoctorClinicService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    console.log(this.doctorClinicService.getDoctors());

    this.doctorClinicService.getDoctors().subscribe(
      (data: Doctor[]) => {
        this.doctors = data;
      },
      (error) => {
        console.error('Error fetching patients', error);
      }
    );
  }

  deleteDoctor(id: number): void {
    this.doctorClinicService.deleteDoctor(id).subscribe(
      () => {
        console.log(`Deleted Doctor with id: ${id}`);
        this.doctors = this.doctors.filter(doctor => doctor.id !== id);
      },
      (error) => {
        console.error('Error deleting patient', error);
      }
    );
  }

  updateDoctor(id: number): void {
    const doctorToEdit = this.doctors.find(doctor => doctor.id === id);

    if (doctorToEdit) {
      const dialogRef = this.dialog.open(EditDoctorDialogComponent, {
        data: doctorToEdit
      });

      dialogRef.afterClosed().subscribe((result: Doctor) => {
        if (result) {
          this.doctorClinicService.updateDoctor(result).subscribe(updatedDoctor => {
            const index = this.doctors.findIndex(doctor => doctor.id === updatedDoctor.id);
            this.doctors[index] = updatedDoctor;
          });
        }
      });
    }
  }

  navigateToHome() {
    this.router.navigate(['']);
  }
}
