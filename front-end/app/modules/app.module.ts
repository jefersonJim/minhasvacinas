import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from '../components/app.component';
import { VacinaFormComponent }   from '../components/vacina/vacina-form.component';
import { VacinaListComponent }   from '../components/vacina/vacina-list.component';
import { ClienteFormComponent }   from '../components/cliente/cliente-form.component';
import { ClienteListComponent }   from '../components/cliente/cliente-list.component';
import { CriarContaFormComponent }   from '../components/criarconta/criarconta-form.component';
import { BemVindoComponent }   from '../components/criarconta/bemvindo.component';
import { LoginComponent }   from '../components/login/login.component';
import { AtendimentoFormComponent }   from '../components/atendimento/atendimento-form.component';
import { MenuComponent }   from '../components/menu/menu.component';
import { routing, appRoutingProviders }  from '../app.routing';
/**
 * @author jeferson Inacio
 */
@NgModule({
  imports:      [ BrowserModule, FormsModule , routing, HttpModule, JsonpModule ],
  declarations: [ AppComponent, MenuComponent, VacinaFormComponent, VacinaListComponent,
  				  LoginComponent, ClienteFormComponent,ClienteListComponent, AtendimentoFormComponent, CriarContaFormComponent, BemVindoComponent],
  providers: 	[ appRoutingProviders ],
  bootstrap:    [ AppComponent, MenuComponent]
})
export class AppModule { }