import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Pessoa} from '../../models/Pessoa';
import {Empresa} from '../../models/Empresa';
import {Nivel} from '../../models/Nivel';
import {EmpresaPessoa} from '../../models/EmpresaPessoa';
import {EmpresaPessoaService} from '../../service/empresapessoa-service';
import {PessoaService} from '../../service/pessoa-service';
@Component({
  providers:[ EmpresaPessoaService , PessoaService],
  templateUrl: './view/criarconta/form.html'
})
export class CriarContaFormComponent { 
	
	constructor(private empresaPessoaService: EmpresaPessoaService, private pessoaService: PessoaService,  private router: Router){}

	mensagem :String;
	error: String;
	senhaRepete?: string;
	tipoPessoa:number = 1;
	model = new Pessoa();
	empresa = new Empresa();
	empresaPessoa = new EmpresaPessoa();
	nivel = new Nivel();

	cadastrar() {
		if(this.tipoPessoa == 1){

			this.pessoaService.cadastrar(this.model).subscribe(
	            data => this.mensagem = data,
	            error => this.error = "Erro ao tentar",
	            () => this.router.navigate(['/'])
	        );

		}else{

			this.nivel.id=1;
			this.nivel.descricao = "Teste"
			this.empresaPessoa.empresa = this.empresa;
			this.empresaPessoa.pessoa = this.model;
			this.empresaPessoa.nivel = this.nivel;
			console.log(this.empresaPessoa);
	        this.empresaPessoaService.cadastrar(this.empresaPessoa).subscribe(
	            data => this.mensagem = data,
	            error => this.error = "Erro ao tentar cadastrar",
	            () => this.router.navigate(['/'])
	        );
		}

    }
}
