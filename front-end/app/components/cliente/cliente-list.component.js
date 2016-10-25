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
var cliente_service_1 = require('../../service/cliente-service');
var Cliente_1 = require('../../models/Cliente');
var ClienteListComponent = (function () {
    function ClienteListComponent(clienteService) {
        this.clienteService = clienteService;
        this.clienteSelected = new Cliente_1.Cliente();
        this.model = new Cliente_1.Cliente();
    }
    ClienteListComponent.prototype.prepareExcuir = function (vacina) {
        this.clienteSelected = vacina;
    };
    ClienteListComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ClienteListComponent.prototype.listar = function () {
        var _this = this;
        this.clienteService.listar(this.model).subscribe(function (data) { return _this.clientes = data; }, function (error) { return _this.error = "Erro ao tentar listar Clientes"; });
    };
    ClienteListComponent.prototype.excluir = function () {
        var _this = this;
        this.clienteService.excluir(this.clienteSelected.id).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao excluir Cliente"; }, function () { return _this.listar(); });
    };
    ClienteListComponent = __decorate([
        core_1.Component({
            selector: 'form-cliente',
            providers: [cliente_service_1.ClienteService],
            templateUrl: './view/cliente/list.html'
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService])
    ], ClienteListComponent);
    return ClienteListComponent;
}());
exports.ClienteListComponent = ClienteListComponent;
//# sourceMappingURL=cliente-list.component.js.map