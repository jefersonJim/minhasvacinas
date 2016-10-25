import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }   from './components/login/login.component';
import { VacinaFormComponent }   from './components/vacina/vacina-form.component';
import { VacinaListComponent }   from './components/vacina/vacina-list.component';
import { ClienteFormComponent }   from './components/cliente/cliente-form.component';
import { ClienteListComponent }   from './components/cliente/cliente-list.component';
import { AtendimentoFormComponent }   from './components/atendimento/atendimento-form.component';
/**
 * @author jeferson Inacio
 */
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vacina', component: VacinaListComponent },
  { path: 'vacina-form', component: VacinaFormComponent },
  { path: 'vacina-form/:id', component: VacinaFormComponent },
  { path: 'cliente', component: ClienteListComponent },
  { path: 'cliente-form', component: ClienteFormComponent },
  { path: 'cliente-form/:id', component: ClienteFormComponent },
  { path: 'atendimento', component: AtendimentoFormComponent },
  { path: '', component: LoginComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
