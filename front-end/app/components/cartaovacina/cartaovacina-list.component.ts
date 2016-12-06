import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartaoVacina} from '../../models/CartaoVacina';
import {CartaoVacinaService} from '../../service/cartaovacina-service';

@Component({
   providers:[CartaoVacinaService],
   templateUrl: './view/cartaovacina/list.html'
})
export class CartaoVacinaListComponent implements OnInit{ 	
	mensagem :String = "";
	error: String = "";
    cartoesVacina:CartaoVacina[];
    model = new CartaoVacina();

	constructor(private routeParams: ActivatedRoute,  private router: Router, private service:CartaoVacinaService){}
	ngOnInit(){
		this.listar();
	}

	listar(){
		this.service.listar(this.model).subscribe(
        	data => this.cartoesVacina = data,
          	error => this.error = "Erro ao tentar listar Vacinas",
      	);
	}
}
