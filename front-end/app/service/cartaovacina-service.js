"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var generic_service_1 = require('../generics/generic-service');
require('rxjs/Rx');
var CartaoVacinaService = (function (_super) {
    __extends(CartaoVacinaService, _super);
    function CartaoVacinaService(http) {
        _super.call(this, "cartao-vacina", http);
        this.http = http;
    }
    CartaoVacinaService.prototype.listar = function (cartaoVacina) {
        var nome = (cartaoVacina.nomePet == undefined ? "" : cartaoVacina.nomePet);
        return this.http.get(this.urlServico + '?nome=' + nome).map(function (res) { return res.json(); });
    };
    CartaoVacinaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CartaoVacinaService);
    return CartaoVacinaService;
}(generic_service_1.GenericService));
exports.CartaoVacinaService = CartaoVacinaService;
//# sourceMappingURL=cartaovacina-service.js.map