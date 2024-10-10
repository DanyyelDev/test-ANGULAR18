import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientClinicComponent } from './add-patient-clinic.component';

describe('AddPatientClinicComponent', () => {
  let component: AddPatientClinicComponent;
  let fixture: ComponentFixture<AddPatientClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPatientClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatientClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
