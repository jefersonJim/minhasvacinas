import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }   from './components/login.component';
import { VacinaFormComponent }   from './components/vacina-form.component';
import { PacienteFormComponent }   from './components/paciente-form.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vacina', component: VacinaFormComponent },
  { path: 'paciente', component: PacienteFormComponent },
  { path: '', component: LoginComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
