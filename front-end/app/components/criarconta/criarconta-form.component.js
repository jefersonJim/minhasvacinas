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
var Pessoa_1 = require('../../models/Pessoa');
var Empresa_1 = require('../../models/Empresa');
var Nivel_1 = require('../../models/Nivel');
var EmpresaPessoa_1 = require('../../models/EmpresaPessoa');
var empresapessoa_service_1 = require('../../service/empresapessoa-service');
var pessoa_service_1 = require('../../service/pessoa-service');
var CriarContaFormComponent = (function () {
    function CriarContaFormComponent(empresaPessoaService, pessoaService, router) {
        this.empresaPessoaService = empresaPessoaService;
        this.pessoaService = pessoaService;
        this.router = router;
        this.tipoPessoa = 1;
        this.model = new Pessoa_1.Pessoa();
        this.empresa = new Empresa_1.Empresa();
        this.empresaPessoa = new EmpresaPessoa_1.EmpresaPessoa();
        this.nivel = new Nivel_1.Nivel();
    }
    CriarContaFormComponent.prototype.cadastrar = function () {
        var _this = this;
        if (this.tipoPessoa == 1) {
            this.pessoaService.cadastrar(this.model).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao tentar"; }, function () { return _this.router.navigate(['/bemvindo']); });
        }
        else {
            this.nivel.id = 1;
            this.nivel.descricao = "Empresário";
            this.empresaPessoa.empresa = this.empresa;
            this.empresaPessoa.pessoa = this.model;
            this.empresaPessoa.nivel = this.nivel;
            console.log(this.empresaPessoa);
            this.empresaPessoaService.cadastrar(this.empresaPessoa).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao tentar cadastrar"; }, function () { return _this.router.navigate(['/bemvindo']); });
        }
    };
    CriarContaFormComponent = __decorate([
        core_1.Component({
            providers: [empresapessoa_service_1.EmpresaPessoaService, pessoa_service_1.PessoaService],
            templateUrl: './view/criarconta/form.html'
        }), 
        __metadata('design:paramtypes', [empresapessoa_service_1.EmpresaPessoaService, pessoa_service_1.PessoaService, router_1.Router])
    ], CriarContaFormComponent);
    return CriarContaFormComponent;
}());
exports.CriarContaFormComponent = CriarContaFormComponent;
//# sourceMappingURL=criarconta-form.component.js.map