import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {Cliente} from '../models/Cliente';
import {GenericService} from '../generics/generic-service';
import 'rxjs/Rx';

@Injectable()
export class ClienteService {
  urlServico:string = "http://localhost:8080/wsminhasvacinas/api/cliente";
  constructor(protected http: Http) {  }

  listar(cliente: Cliente) {
       return this.http.get(this.urlServico).map(res => res.json());
  }

  cadastrar(cliente: Cliente) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(cliente);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
  }

  atualizar(cliente: Cliente) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(cliente);
        return this.http.put(this.urlServico, body, options).map(res => res.text());
  }

  excluir(id: number) {
	 let url = this.urlServico + '/' + id;
      return this.http.delete(url).map(res => res.text());
  }

  buscarPorId(id: number) {
		return this.http.get(this.urlServico + '/'+id).map(res => res.json());;
  }
}