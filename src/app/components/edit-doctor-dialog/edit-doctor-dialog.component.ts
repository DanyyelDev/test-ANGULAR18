import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Doctor } from '../../types';

@Component({
  selector: 'app-edit-doctor-dialog',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './edit-doctor-dialog.component.html',
  styleUrl: './edit-doctor-dialog.component.css'
})
export class EditDoctorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditDoctorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }

}
