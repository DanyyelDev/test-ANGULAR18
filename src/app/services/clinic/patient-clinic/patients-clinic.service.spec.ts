import { TestBed } from '@angular/core/testing';

import { PatientsClinicService } from '../patient-clinic/patients-clinic.service';

describe('PatientsClinicService', () => {
  let service: PatientsClinicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsClinicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
