import { Http,Headers, Response, RequestOptions } from '@angular/http';
export abstract class GenericService<Entity> {
	urlServico:string = "http://localhost:8080/wsminhasvacinas/api/";
    constructor(protected servico :string, protected http: Http) { 
    	this.urlServico += servico;
    }

    cadastrar(entity: Entity) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(entity);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
    }

    atualizar(entity: Entity) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(entity);
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