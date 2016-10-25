import { Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vacina} from '../../models/Vacina';
import {VacinaService} from '../../service/Vacina-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'form-vacina',
  providers: [VacinaService],
  templateUrl: './view/vacina/form.html'
})

export class VacinaFormComponent implements OnInit { 	

	constructor(private routeParams: ActivatedRoute, private vacinaService: VacinaService, private router: Router){}

	private id:number;
	private state: string;
	private labelBtn: string;
	private mensagem: string;
  	private error: string;
  	private model:Vacina = new Vacina();

	ngOnInit() {
		this.routeParams.params.subscribe(params => {
        	this.id = params['id'];
    	});
    	this.state = (this.id != null ? "edição" : "cadastro");
    	this.labelBtn = (this.id != null ? "Atualizar" : "Cadastrar");
    	(this.id != null ? this.buscar(this.id) :new Vacina());
  	}


  	buscar(id: number) {
        this.vacinaService.buscarPorId(id).subscribe(
            data => this.model = data,
            error => this.error = "Erro ao buscar Vacina"
        );
    }

    salvar(){
    	if(this.id != null){
    		this.atualizar();
        }else{
            this.cadastrar();
    	}
    }

    cadastrar() {
        this.vacinaService.cadastrar(this.model).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao cadastrar vacina",
            () => this.router.navigate(['/vacina'])
        );
    }

    atualizar() {
        this.vacinaService.atualizar(this.model).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao editar vacina",
            () => this.router.navigate(['/vacina'])
        );
    }

    
}
