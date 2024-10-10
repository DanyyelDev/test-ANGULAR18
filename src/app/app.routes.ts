import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { ViewAllPatientsComponent } from './components/view-all-patients/view-all-patients.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeClinicComponent } from './components/welcome-clinic/welcome-clinic.component';
import { AddPatientClinicComponent } from './components/new-clinic/add-patient-clinic/add-patient-clinic.component';
import { AddDoctorComponent } from './components/new-clinic/add-doctor/add-doctor.component';
import { AddClinicComponent } from './components/new-clinic/add-clinic/add-clinic.component';


export const routes: Routes = [

    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'add-patient',
        component: AddPatientComponent,
    }
    ,
    {
        path: 'view-patients',
        component: ViewAllPatientsComponent,
    },
    {
        path: 'clinic',
        component: WelcomeClinicComponent,

    },
    
    {
        path: 'clinic/add-clinic',
        component: AddClinicComponent
    },
    {
        path: 'clinic/add-doctor',
        component: AddDoctorComponent
    },
    {
        path: 'clinic/add-patient',
        component: AddPatientClinicComponent
    },
    {
        path: 'clinic/list-patient',
        component: AddDoctorComponent
    },/* Not found routes */
    {
        path: '**',
        component: NotFoundComponent,
    },

];
