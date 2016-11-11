import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {Pessoa} from '../models/Pessoa';
import {GenericService} from '../generics/generic-service';
import 'rxjs/Rx';

/**
 * @author jeferson Inacio
 */
@Injectable()
export class PessoaService extends GenericService<Pessoa>{

  constructor(protected http: Http) { 
    super("pessoa",http);
  }
}