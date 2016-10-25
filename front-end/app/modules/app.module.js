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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('../components/app.component');
var vacina_form_component_1 = require('../components/vacina/vacina-form.component');
var vacina_list_component_1 = require('../components/vacina/vacina-list.component');
var cliente_form_component_1 = require('../components/cliente/cliente-form.component');
var cliente_list_component_1 = require('../components/cliente/cliente-list.component');
var login_component_1 = require('../components/login/login.component');
var atendimento_form_component_1 = require('../components/atendimento/atendimento-form.component');
var menu_component_1 = require('../components/menu/menu.component');
var app_routing_1 = require('../app.routing');
/**
 * @author jeferson Inacio
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule, http_1.JsonpModule],
            declarations: [app_component_1.AppComponent, menu_component_1.MenuComponent, vacina_form_component_1.VacinaFormComponent, vacina_list_component_1.VacinaListComponent,
                login_component_1.LoginComponent, cliente_form_component_1.ClienteFormComponent, cliente_list_component_1.ClienteListComponent, atendimento_form_component_1.AtendimentoFormComponent],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent, menu_component_1.MenuComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map