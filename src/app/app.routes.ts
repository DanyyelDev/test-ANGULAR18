import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { ViewAllPatientsComponent } from './components/view-all-patients/view-all-patients.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


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
        path: '**',
        component: NotFoundComponent,
    },
];
