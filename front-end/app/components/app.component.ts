import { Component} from '@angular/core';
import {Usuario} from '../models/Usuario';
@Component({
  selector: 'my-app',
  templateUrl: './view/login.html'
})
export class AppComponent { 	
	mensagem :String = "";
	error: boolean = false;
	
	enviar(): void {
		this.error = false;
    }
}
