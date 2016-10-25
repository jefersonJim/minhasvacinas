import { Component} from '@angular/core';
import {ClienteService} from '../../service/cliente-service';
import {Cliente} from '../../models/Cliente';
import { OnInit } from '@angular/core';


import { OnInit } from '@angular/core';

@Component({
  selector: 'form-cliente',
  providers:[ ClienteService ],
  templateUrl: './view/cliente/list.html'
})
export class ClienteListComponent implements OnInit{ 
  constructor(private clienteService : ClienteService) { } 
  clientes:Cliente[];
  clienteSelected:Cliente = new Cliente();
  model = new Cliente();

  prepareExcuir(vacina:Vacina){
    this.clienteSelected = vacina;
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
      this.clienteService.listar(this.model).subscribe(
          data => this.clientes = data,
          error => this.error = "Erro ao tentar listar Clientes",
          
      );
  }

  excluir() {
      this.clienteService.excluir(this.clienteSelected.id).subscribe(
          data => this.mensagem = data,
          error => this.error = "Erro ao excluir Cliente",
          () => this.listar()
      );
  }

}
