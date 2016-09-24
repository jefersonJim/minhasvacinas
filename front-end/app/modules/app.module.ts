import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from '../components/app.component';
import { VacinaFormComponent }   from '../components/vacina-form.component';
import { PacienteFormComponent }   from '../components/paciente-form.component';
import { LoginComponent }   from '../components/login.component';
import { MenuComponent }   from '../components/menu.component';
import { routing, appRoutingProviders }  from '../app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule , routing],
  declarations: [ AppComponent, MenuComponent, VacinaFormComponent, LoginComponent, PacienteFormComponent],
  providers: 	[ appRoutingProviders ],
  bootstrap:    [ AppComponent, MenuComponent]
})
export class AppModule { }