import { Component} from '@angular/core';
import {Vacina} from '../../models/Vacina';
import {VacinaService} from '../../service/vacina-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'form-vacina',
  providers: [VacinaService],
  templateUrl: './view/vacina/list.html'
})


export class VacinaListComponent  implements OnInit{ 

  constructor(private vacinaService: VacinaService) { }	

  private vacinas: Vacina[];
  private mensagem: String;
  private error: String;
  private vacinaSelected:Vacina = new Vacina();

  model = new Vacina();

  ngOnInit() {
		this.listar();
  }

  listar() {
      this.vacinaService.listar(this.model).subscribe(
          data => this.vacinas = data,
          error => this.error = "Erro ao tentar listar Vacinas",
          
      );
  }

  prepareExcuir(vacina:Vacina){
    this.vacinaSelected = vacina;
  }

  excluir() {
      this.vacinaService.excluir(this.vacinaSelected.id).subscribe(
          data => this.mensagem = data,
          error => this.error = "Erro ao excluir vacina",
          () => this.listar()
      );
  }


}
