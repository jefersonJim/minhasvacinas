import { Injectable } from '@angular/core';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import {TpMedida} from '../models/TpMedida';
import {GenericService} from '../generics/generic-service';
import 'rxjs/Rx';

@Injectable()
export class TpMedidaService extends GenericService<TpMedida>{
  constructor(protected http: Http) { 
    super("tpmedida", http);
  }
}