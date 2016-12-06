import {Medida} from './Medida'

export class CartaoVacina {
	public id?:number;
    public nomePet?: string;
	public especie?: string;
	public raca?: string;
	public nascimento? : string;
	public sexo? : string;
	public cor? : string;
	public criacao? : string;
	public pathImage? : string;
	public medidas?	:Medida[];
}	