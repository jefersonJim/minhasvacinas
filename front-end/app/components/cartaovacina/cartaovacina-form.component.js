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
var Medida_1 = require('../../models/Medida');
var tpmedida_service_1 = require('../../service/tpmedida-service');
var cartaovacina_service_1 = require('../../service/cartaovacina-service');
var CartaoVacinaFormComponent = (function () {
    function CartaoVacinaFormComponent(routeParams, router, tpMedidaService, service) {
        this.routeParams = routeParams;
        this.router = router;
        this.tpMedidaService = tpMedidaService;
        this.service = service;
        this.mensagem = "";
        this.error = "";
        this.model = new CartaoVacina_1.CartaoVacina();
        this.medida = new Medida_1.Medida();
    }
    CartaoVacinaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.state = (this.id != null ? "edição" : "cadastro");
        this.labelBtn = (this.id != null ? "Atualizar" : "Cadastrar");
        this.listarTpMedidas();
    };
    CartaoVacinaFormComponent.prototype.listarTpMedidas = function () {
        var _this = this;
        this.tpMedidaService.listar(null).subscribe(function (data) { return _this.tpMididas = data; }, function (error) { return _this.mensagem = "Erro ao tentar listar Tipo de medidas"; });
    };
    CartaoVacinaFormComponent.prototype.adicionarMedidas = function () {
        console.log(this.medida);
        if (this.model.medidas == null) {
            this.model.medidas = [];
        }
        this.model.medidas.push(this.medida);
        this.medida = new Medida_1.Medida();
    };
    CartaoVacinaFormComponent.prototype.salvar = function () {
        if (this.id != null) {
            this.atualizar();
        }
        else {
            this.cadastrar();
        }
    };
    CartaoVacinaFormComponent.prototype.cadastrar = function () {
        var _this = this;
        this.service.cadastrar(this.model).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao cadastrar Cartão"; }, function () { return _this.router.navigate(['/cartaovacina']); });
    };
    CartaoVacinaFormComponent.prototype.atualizar = function () {
        var _this = this;
        this.service.atualizar(this.model).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao editar Cliente"; }, function () { return _this.router.navigate(['/cartaovacina']); });
    };
    CartaoVacinaFormComponent = __decorate([
        core_1.Component({
            providers: [tpmedida_service_1.TpMedidaService, cartaovacina_service_1.CartaoVacinaService],
            templateUrl: './view/cartaovacina/form.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, tpmedida_service_1.TpMedidaService, cartaovacina_service_1.CartaoVacinaService])
    ], CartaoVacinaFormComponent);
    return CartaoVacinaFormComponent;
}());
exports.CartaoVacinaFormComponent = CartaoVacinaFormComponent;
//# sourceMappingURL=cartaovacina-form.component.js.map