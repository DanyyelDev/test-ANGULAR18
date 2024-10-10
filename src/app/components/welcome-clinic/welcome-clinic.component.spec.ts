import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeClinicComponent } from './welcome-clinic.component';

describe('WelcomeComponent', () => {
  let component: WelcomeClinicComponent;
  let fixture: ComponentFixture<WelcomeClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
