import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }   from './components/login/login.component';
import { VacinaFormComponent }   from './components/vacina/vacina-form.component';
import { VacinaListComponent }   from './components/vacina/vacina-list.component';
import { ClienteFormComponent }   from './components/cliente/cliente-form.component';
import { CriarContaFormComponent }   from './components/criarconta/criarconta-form.component';
import { CartaoVacinaListComponent }   from './components/cartaovacina/cartaovacina-list.component';
import { CartaoVacinaFormComponent }   from './components/cartaovacina/cartaovacina-form.component';
import { ClienteListComponent }   from './components/cliente/cliente-list.component';
import { AtendimentoFormComponent }   from './components/atendimento/atendimento-form.component';
import { BemVindoComponent }   from './components/criarconta/bemvindo.component';
/**
 * @author jeferson Inacio
 */
const appRoutes: Routes = [
  { path: 'login', component: CriarContaFormComponent },
  { path: 'vacina', component: VacinaListComponent },
  { path: 'vacina-form', component: VacinaFormComponent },
  { path: 'vacina-form/:id', component: VacinaFormComponent },
  { path: 'cliente', component: ClienteListComponent },
  { path: 'cliente-form', component: ClienteFormComponent },
  { path: 'cliente-form/:id', component: ClienteFormComponent },
  { path: 'atendimento', component: AtendimentoFormComponent },
  { path: 'criarconta', component: CriarContaFormComponent },
  { path: 'cartaovacina', component: CartaoVacinaListComponent },
  { path: 'cartaovacina-form', component: CartaoVacinaFormComponent },
  { path: 'cartaovacina-form/:id', component: CartaoVacinaFormComponent },
  { path: 'bemvindo', component: BemVindoComponent },
  { path: '', component: CriarContaFormComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
