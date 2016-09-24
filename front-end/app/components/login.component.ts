import { Component} from '@angular/core';
import {Usuario} from '../models/Usuario';
@Component({
  templateUrl: './view/login.html'
})
export class LoginComponent { 	
	mensagem :String = "";
	error: boolean = false;
	
	enviar(): void {
		this.error = false;
    }
}
