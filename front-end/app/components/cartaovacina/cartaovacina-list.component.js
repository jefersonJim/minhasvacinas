"use strict";
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
var router_1 = require('@angular/router');
var CartaoVacina_1 = require('../../models/CartaoVacina');
var cartaovacina_service_1 = require('../../service/cartaovacina-service');
var CartaoVacinaListComponent = (function () {
    function CartaoVacinaListComponent(routeParams, router, service) {
        this.routeParams = routeParams;
        this.router = router;
        this.service = service;
        this.mensagem = "";
        this.error = "";
        this.model = new CartaoVacina_1.CartaoVacina();
    }
    CartaoVacinaListComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    CartaoVacinaListComponent.prototype.listar = function () {
        var _this = this;
        this.service.listar(this.model).subscribe(function (data) { return _this.cartoesVacina = data; }, function (error) { return _this.error = "Erro ao tentar listar Vacinas"; });
    };
    CartaoVacinaListComponent = __decorate([
        core_1.Component({
            providers: [cartaovacina_service_1.CartaoVacinaService],
            templateUrl: './view/cartaovacina/list.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, cartaovacina_service_1.CartaoVacinaService])
    ], CartaoVacinaListComponent);
    return CartaoVacinaListComponent;
}());
exports.CartaoVacinaListComponent = CartaoVacinaListComponent;
//# sourceMappingURL=cartaovacina-list.component.js.map