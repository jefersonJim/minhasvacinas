import { Component} from '@angular/core';
import {Usuario} from '../models/Usuario';
@Component({
  selector: 'form-vacina',
  templateUrl: './view/vacina_form.html'
})
export class VacinaFormComponent { 	
	mensagem :String = "";
	error: boolean = false;
	
	enviar(): void {
		this.error = false;
    }
}
