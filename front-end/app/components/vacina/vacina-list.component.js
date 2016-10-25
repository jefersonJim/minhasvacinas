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
var Vacina_1 = require('../../models/Vacina');
var vacina_service_1 = require('../../service/vacina-service');
var VacinaListComponent = (function () {
    function VacinaListComponent(vacinaService) {
        this.vacinaService = vacinaService;
        this.vacinaSelected = new Vacina_1.Vacina();
        this.model = new Vacina_1.Vacina();
    }
    VacinaListComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    VacinaListComponent.prototype.listar = function () {
        var _this = this;
        this.vacinaService.listar(this.model).subscribe(function (data) { return _this.vacinas = data; }, function (error) { return _this.error = "Erro ao tentar listar Vacinas"; });
    };
    VacinaListComponent.prototype.prepareExcuir = function (vacina) {
        this.vacinaSelected = vacina;
    };
    VacinaListComponent.prototype.excluir = function () {
        var _this = this;
        this.vacinaService.excluir(this.vacinaSelected.id).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao excluir vacina"; }, function () { return _this.listar(); });
    };
    VacinaListComponent = __decorate([
        core_1.Component({
            selector: 'form-vacina',
            providers: [vacina_service_1.VacinaService],
            templateUrl: './view/vacina/list.html'
        }), 
        __metadata('design:paramtypes', [vacina_service_1.VacinaService])
    ], VacinaListComponent);
    return VacinaListComponent;
}());
exports.VacinaListComponent = VacinaListComponent;
//# sourceMappingURL=vacina-list.component.js.map