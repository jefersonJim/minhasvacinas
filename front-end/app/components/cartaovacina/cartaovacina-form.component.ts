import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TpMedida} from '../../models/TpMedida';
import {CartaoVacina} from '../../models/CartaoVacina';
import {Medida} from '../../models/Medida';
import {TpMedidaService} from '../../service/tpmedida-service';
import {CartaoVacinaService} from '../../service/cartaovacina-service';

@Component({
  providers:[TpMedidaService, CartaoVacinaService],
  templateUrl: './view/cartaovacina/form.html'
})
export class CartaoVacinaFormComponent implements OnInit{

	constructor(private routeParams: ActivatedRoute,  private router: Router, private tpMedidaService: TpMedidaService, private service:CartaoVacinaService){}

	private id:number;
	private state: string;
	private labelBtn: string;

	mensagem :String = "";
	error: String = "";
	model = new CartaoVacina();
	tpMididas:TpMedida[];
	medida = new Medida();

	ngOnInit(){
		this.routeParams.params.subscribe(params => {
        	this.id = params['id'];
    	});
    	this.state = (this.id != null ? "edição" : "cadastro");
    	this.labelBtn = (this.id != null ? "Atualizar" : "Cadastrar");
    	this.listarTpMedidas();
	}


	listarTpMedidas() {
      this.tpMedidaService.listar(null).subscribe(
          data => this.tpMididas = data,
          error => this.mensagem = "Erro ao tentar listar Tipo de medidas"
      );
	}

	adicionarMedidas(){
		console.log(this.medida);
		if(this.model.medidas == null){
			this.model.medidas = [];
		}
		this.model.medidas.push(this.medida);
		this.medida = new Medida();
	}
  
   salvar(){
      if(this.id != null){
        this.atualizar();
      }else{
        this.cadastrar();
      }
    }

  cadastrar() {
      this.service.cadastrar(this.model).subscribe(
          data => this.mensagem = data,
          error => this.error = "Erro ao cadastrar Cartão",
          () => this.router.navigate(['/cartaovacina'])
      );
  }

  atualizar() {
        this.service.atualizar(this.model).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao editar Cliente",
            () => this.router.navigate(['/cartaovacina'])
        );
    }


}
