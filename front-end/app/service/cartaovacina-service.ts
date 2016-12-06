import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {CartaoVacina} from '../models/CartaoVacina';
import {GenericService} from '../generics/generic-service';
import 'rxjs/Rx';

@Injectable()
export class CartaoVacinaService extends GenericService<CartaoVacina>{
  constructor(protected http: Http) { 
    super("cartao-vacina", http);
  }

  listar(cartaoVacina: CartaoVacina) {      
       let nome = (cartaoVacina.nomePet == undefined ? "" : cartaoVacina.nomePet);
       return this.http.get(this.urlServico+'?nome='+nome).map(res => res.json());
  }
}