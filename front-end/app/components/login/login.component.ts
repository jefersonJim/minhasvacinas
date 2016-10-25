import { Component} from '@angular/core';
import {Usuario} from '../../models/Usuario';
@Component({
  templateUrl: './view/login/login.html'
})
export class LoginComponent { 	
	mensagem :String = "";
	error: boolean = false;

	model = new Usuario("", "");	
}
