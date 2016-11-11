import {Pessoa} from '../models/Pessoa';
import {Empresa} from '../models/Empresa';
import {Nivel} from '../models/Nivel';

export class EmpresaPessoa {
	public id?:number;
    public empresa?:Empresa;
    public pessoa?:Pessoa;
    public nivel?:Nivel;
}	