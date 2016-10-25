import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {Vacina} from '../models/Vacina';
import 'rxjs/Rx';

/**
 * @author jeferson Inacio
 */
@Injectable()
export class VacinaService{
  urlServico:string = "http://localhost:8080/wsminhasvacinas/api/vacina";
  constructor(protected http: Http) {  }

  listar(vacina: Vacina) {
       let codigo = (vacina.id == undefined ? "" : vacina.id);
       let nome = (vacina.nome == undefined ? "" : vacina.nome);
       return this.http.get(this.urlServico+'?codigo='+codigo+'&nome='+nome).map(res => res.json());
  }

  cadastrar(vacina: Vacina) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(vacina);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
  }

  atualizar(vacina: Vacina) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(vacina);
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