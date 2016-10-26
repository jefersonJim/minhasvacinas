import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {Vacina} from '../models/Vacina';
import {GenericService} from '../generics/generic-service';
import 'rxjs/Rx';

/**
 * @author jeferson Inacio
 */
@Injectable()
export class VacinaService extends GenericService<Vacina>{

  constructor(protected http: Http) { 
    super("vacina",http);
  }

  listar(vacina: Vacina) {
       let codigo = (vacina.id == undefined ? "" : vacina.id);
       let nome = (vacina.nome == undefined ? "" : vacina.nome);
       return this.http.get(this.urlServico+'?codigo='+codigo+'&nome='+nome).map(res => res.json());
  }
}