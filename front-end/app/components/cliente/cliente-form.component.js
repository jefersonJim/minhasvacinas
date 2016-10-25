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
var Cliente_1 = require('../../models/Cliente');
var cliente_service_1 = require('../../service/cliente-service');
/**
 * @author jeferson Inacio
 */
var ClienteFormComponent = (function () {
    function ClienteFormComponent(routeParams, clienteService, router) {
        this.routeParams = routeParams;
        this.clienteService = clienteService;
        this.router = router;
        this.model = new Cliente_1.Cliente();
    }
    ClienteFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.state = (this.id != null ? "edição" : "cadastro");
        this.labelBtn = (this.id != null ? "Atualizar" : "Cadastrar");
        (this.id != null ? this.buscar(this.id) : new Cliente_1.Cliente());
    };
    ClienteFormComponent.prototype.buscar = function (id) {
        var _this = this;
        this.clienteService.buscarPorId(id).subscribe(function (data) { return _this.model = data; }, function (error) { return _this.error = "Erro ao buscar Cliente"; });
    };
    ClienteFormComponent.prototype.salvar = function () {
        if (this.id != null) {
            this.atualizar();
        }
        else {
            this.cadastrar();
        }
    };
    ClienteFormComponent.prototype.cadastrar = function () {
        var _this = this;
        this.clienteService.cadastrar(this.model).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao cadastrar Cliente"; }, function () { return _this.router.navigate(['/cliente']); });
    };
    ClienteFormComponent.prototype.atualizar = function () {
        var _this = this;
        this.clienteService.atualizar(this.model).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao editar Cliente"; }, function () { return _this.router.navigate(['/cliente']); });
    };
    ClienteFormComponent = __decorate([
        core_1.Component({
            selector: 'form-cliente',
            providers: [cliente_service_1.ClienteService],
            templateUrl: './view/cliente/form.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, cliente_service_1.ClienteService, router_1.Router])
    ], ClienteFormComponent);
    return ClienteFormComponent;
}());
exports.ClienteFormComponent = ClienteFormComponent;
//# sourceMappingURL=cliente-form.component.js.map