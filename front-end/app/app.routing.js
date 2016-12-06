"use strict";
var router_1 = require('@angular/router');
var vacina_form_component_1 = require('./components/vacina/vacina-form.component');
var vacina_list_component_1 = require('./components/vacina/vacina-list.component');
var cliente_form_component_1 = require('./components/cliente/cliente-form.component');
var criarconta_form_component_1 = require('./components/criarconta/criarconta-form.component');
var cartaovacina_list_component_1 = require('./components/cartaovacina/cartaovacina-list.component');
var cartaovacina_form_component_1 = require('./components/cartaovacina/cartaovacina-form.component');
var cliente_list_component_1 = require('./components/cliente/cliente-list.component');
var atendimento_form_component_1 = require('./components/atendimento/atendimento-form.component');
var bemvindo_component_1 = require('./components/criarconta/bemvindo.component');
/**
 * @author jeferson Inacio
 */
var appRoutes = [
    { path: 'login', component: criarconta_form_component_1.CriarContaFormComponent },
    { path: 'vacina', component: vacina_list_component_1.VacinaListComponent },
    { path: 'vacina-form', component: vacina_form_component_1.VacinaFormComponent },
    { path: 'vacina-form/:id', component: vacina_form_component_1.VacinaFormComponent },
    { path: 'cliente', component: cliente_list_component_1.ClienteListComponent },
    { path: 'cliente-form', component: cliente_form_component_1.ClienteFormComponent },
    { path: 'cliente-form/:id', component: cliente_form_component_1.ClienteFormComponent },
    { path: 'atendimento', component: atendimento_form_component_1.AtendimentoFormComponent },
    { path: 'criarconta', component: criarconta_form_component_1.CriarContaFormComponent },
    { path: 'cartaovacina', component: cartaovacina_list_component_1.CartaoVacinaListComponent },
    { path: 'cartaovacina-form', component: cartaovacina_form_component_1.CartaoVacinaFormComponent },
    { path: 'cartaovacina-form/:id', component: cartaovacina_form_component_1.CartaoVacinaFormComponent },
    { path: 'bemvindo', component: bemvindo_component_1.BemVindoComponent },
    { path: '', component: criarconta_form_component_1.CriarContaFormComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map