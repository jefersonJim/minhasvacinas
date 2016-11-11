import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {EmpresaPessoa} from '../models/EmpresaPessoa';
import {GenericService} from '../generics/generic-service';
import 'rxjs/Rx';

/**
 * @author jeferson Inacio
 */
@Injectable()
export class EmpresaPessoaService extends GenericService<EmpresaPessoa>{

  constructor(protected http: Http) { 
    super("empresapessoa",http);
  }
}