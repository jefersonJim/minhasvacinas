import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from '../components/app.component';
import { MenuComponent }   from '../components/menu.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MenuComponent],
  bootstrap:    [ AppComponent, MenuComponent]
})
export class AppModule { }