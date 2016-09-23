import { Component} from '@angular/core';
import {Usuario} from '../models/Usuario';
@Component({
  selector: 'my-app',
  templateUrl: './view/login.html'
})
export class AppComponent { 
	constructor(){
		this.usuario = new Usuario();
	}
	mensagem :String = "";
	error: boolean = false;
	enviar(): void {
		this.error = false;
		if(this.usuario.login == ""){
			this.error = true;
			this.mensagem = "O campo login é de preenchimento obrigatório";
		}

		if(this.usuario.senha == ""){
			this.error = true;
			this.mensagem += " \n O campo senha é de preenchimento obrigatório";
		}

		if(!this.error){
			this.mensagem = "";
		}
    }
}
