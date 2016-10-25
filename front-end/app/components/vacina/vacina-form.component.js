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
var Vacina_1 = require('../../models/Vacina');
var Vacina_service_1 = require('../../service/Vacina-service');
var VacinaFormComponent = (function () {
    function VacinaFormComponent(routeParams, vacinaService, router) {
        this.routeParams = routeParams;
        this.vacinaService = vacinaService;
        this.router = router;
        this.model = new Vacina_1.Vacina();
    }
    VacinaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.state = (this.id != null ? "edição" : "cadastro");
        this.labelBtn = (this.id != null ? "Atualizar" : "Cadastrar");
        (this.id != null ? this.buscar(this.id) : new Vacina_1.Vacina());
    };
    VacinaFormComponent.prototype.buscar = function (id) {
        var _this = this;
        this.vacinaService.buscarPorId(id).subscribe(function (data) { return _this.model = data; }, function (error) { return _this.error = "Erro ao buscar Vacina"; });
    };
    VacinaFormComponent.prototype.salvar = function () {
        if (this.id != null) {
            this.atualizar();
        }
        else {
            this.cadastrar();
        }
    };
    VacinaFormComponent.prototype.cadastrar = function () {
        var _this = this;
        this.vacinaService.cadastrar(this.model).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao cadastrar vacina"; }, function () { return _this.router.navigate(['/vacina']); });
    };
    VacinaFormComponent.prototype.atualizar = function () {
        var _this = this;
        this.vacinaService.atualizar(this.model).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao editar vacina"; }, function () { return _this.router.navigate(['/vacina']); });
    };
    VacinaFormComponent = __decorate([
        core_1.Component({
            selector: 'form-vacina',
            providers: [Vacina_service_1.VacinaService],
            templateUrl: './view/vacina/form.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, Vacina_service_1.VacinaService, router_1.Router])
    ], VacinaFormComponent);
    return VacinaFormComponent;
}());
exports.VacinaFormComponent = VacinaFormComponent;
//# sourceMappingURL=vacina-form.component.js.map