import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Cliente} from '../../models/Cliente';
import {ClienteService} from '../../service/cliente-service';

/**
 * @author jeferson Inacio
 */
@Component({
  selector: 'form-cliente',
  providers:[ ClienteService ],
  templateUrl: './view/cliente/form.html'
})

export class ClienteFormComponent implements OnInit{
	
	constructor(private routeParams: ActivatedRoute, private clienteService: ClienteService, private router: Router){}
	private id:number;
	private state: string;
	private labelBtn: string;
	private mensagem: string;
  	private error: string;
	model = new Cliente();

	ngOnInit() {
		this.routeParams.params.subscribe(params => {
        	this.id = params['id'];
    	});
    	this.state = (this.id != null ? "edição" : "cadastro");
    	this.labelBtn = (this.id != null ? "Atualizar" : "Cadastrar");
    	(this.id != null ? this.buscar(this.id) :new Cliente());
  	}

  	buscar(id: number) {
        this.clienteService.buscarPorId(id).subscribe(
            data => this.model = data,
            error => this.error = "Erro ao buscar Cliente"
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
        this.clienteService.cadastrar(this.model).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao cadastrar Cliente",
            () => this.router.navigate(['/cliente'])
        );
    }

    atualizar() {
        this.clienteService.atualizar(this.model).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao editar Cliente",
            () => this.router.navigate(['/cliente'])
        );
    }
}
