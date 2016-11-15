"use strict";
var http_1 = require('@angular/http');
var GenericService = (function () {
    function GenericService(servico, http) {
        this.servico = servico;
        this.http = http;
        this.urlServico = "http://localhost:8080/wsminhasvacinas/api/";
        this.urlServico += servico;
    }
    GenericService.prototype.listar = function (entity) {
        return this.http.get(this.urlServico).map(function (res) { return res.json(); });
    };
    GenericService.prototype.cadastrar = function (entity) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(entity);
        return this.http.post(this.urlServico, entity, options).map(function (res) { return res.text(); });
    };
    GenericService.prototype.atualizar = function (entity) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(entity);
        return this.http.put(this.urlServico, body, options).map(function (res) { return res.text(); });
    };
    GenericService.prototype.excluir = function (id) {
        var url = this.urlServico + '/' + id;
        return this.http.delete(url).map(function (res) { return res.text(); });
    };
    GenericService.prototype.buscarPorId = function (id) {
        return this.http.get(this.urlServico + '/' + id).map(function (res) { return res.json(); });
        ;
    };
    return GenericService;
}());
exports.GenericService = GenericService;
//# sourceMappingURL=generic-service.js.map