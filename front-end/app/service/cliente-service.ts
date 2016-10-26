import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {Cliente} from '../models/Cliente';
import {GenericService} from '../generics/generic-service';
import 'rxjs/Rx';

@Injectable()
export class ClienteService extends GenericService<Cliente>{
  constructor(protected http: Http) { 
    super("cliente", http);
  }
}