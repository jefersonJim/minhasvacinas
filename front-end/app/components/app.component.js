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
var Usuario_1 = require('../models/Usuario');
var AppComponent = (function () {
    function AppComponent() {
        this.mensagem = "";
        this.error = false;
        this.usuario = new Usuario_1.Usuario();
    }
    AppComponent.prototype.enviar = function () {
        this.error = false;
        if (this.usuario.login == "") {
            this.error = true;
            this.mensagem = "O campo login é de preenchimento obrigatório";
        }
        if (this.usuario.senha == "") {
            this.error = true;
            this.mensagem += " \n O campo senha é de preenchimento obrigatório";
        }
        if (!this.error) {
            this.mensagem = "";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './view/login.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map