import { CadbensComponent } from './bens/cadbens/cadbens.component';
import { ConsbensComponent } from './bens/consbens/consbens.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ConsuclienteComponent } from './cliente/consucliente/consucliente.component';
import { CadclienteComponent } from './cliente/cadcliente/cadcliente.component';
import { ConsuFornecedoresComponent } from './cliente/consucliente/consfornecedores.component';
import { CadFornecedoresComponent } from './cliente/cadcliente/cadfornecedores.component';
import { ConsObrasComponent } from './obras/consobras/consobras.component';
import { CadObrasComponent } from './obras/cadobras/cadobras.component';
import { ConsServicosComponent } from './servicos/consservicos/consservicos.component';
import { CadServicosComponent } from './servicos/cadservicos/cadservicos.component';
import { ConsGrupoContasComponent } from './grupocontas/consgrupocontas/consgrupocontas.component';
import { CadGrupoContasComponent } from './grupocontas/cadgrupocontas/cadgrupocontas.component';
import { ConsProdutoComponent } from './produto/consproduto/consproduto.component';
import { CadProdutoComponent } from './produto/cadproduto/cadproduto.component';
import { ConsFaseObraComponent } from './faseobra/consfaseobra/consfaseobra.component';
import { CadFaseObraComponent } from './faseobra/cadfaseobra/cadfaseobra.component';
import { ConsPlanoContasComponent } from './planocontas/consplanocontas/consplanocontas.component';
import { CadsPlanoContasComponent } from './planocontas/cadplanocontas/cadplanocontas.component';
import { ConspagarComponent } from './contas/pagar/conspagar/conspagar.component';
import { ConsreceberComponent } from './contas/receber/consreceber/consreceber.component';
import { CadreceberComponent } from './contas/receber/cadreceber/cadreceber.component';
import { CadpagarComponent } from './contas/pagar/cadpagar/cadpagar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTER: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'consCliente', component: ConsuclienteComponent },
    { path: 'consCliente/:rota', component: ConsuclienteComponent },
    { path: 'cadCliente', component: CadclienteComponent },
    { path: 'cadcliente/:id', component: CadclienteComponent },
    { path: 'consFornecedores', component: ConsuFornecedoresComponent },
    { path: 'cadFornecedores', component: CadFornecedoresComponent },
    { path: 'cadFornecedores/:id', component: CadFornecedoresComponent },
    { path: 'consobras', component: ConsObrasComponent },
    { path: 'cadobras', component: CadObrasComponent },
    { path: 'cadobras/:id', component: CadObrasComponent },
    { path: 'consservicos', component: ConsServicosComponent },
    { path: 'cadservicos', component: CadServicosComponent },
    { path: 'cadservicos/:id', component: CadServicosComponent },
    { path: 'consgrupocontas', component: ConsGrupoContasComponent },
    { path: 'cadgrupocontas', component: CadGrupoContasComponent },
    { path: 'cadgrupocontas/:id', component: CadGrupoContasComponent },
    { path: 'consproduto', component: ConsProdutoComponent },
    { path: 'cadproduto', component: CadProdutoComponent },
    { path: 'cadproduto/:id', component: CadProdutoComponent },
    { path: 'consfaseobra', component: ConsFaseObraComponent },
    { path: 'cadfaseobra', component: CadFaseObraComponent },
    { path: 'cadfaseobra/:id', component: CadFaseObraComponent },
    { path: 'consplanocontas', component: ConsPlanoContasComponent },
    { path: 'cadplanocontas', component: CadsPlanoContasComponent },
    { path: 'cadplanocontas/:id', component: CadsPlanoContasComponent },
    { path: 'consbens', component: ConsbensComponent },
    { path: 'cadbens/:tipo', component: CadbensComponent },
    { path: 'cadbens/:tipo/:id', component: CadbensComponent },
    { path: 'cadbens/:tipo/:id/:rota', component: CadbensComponent },
    { path: 'conspagar', component: ConspagarComponent },
    { path: 'consreceber', component: ConsreceberComponent },
    { path: 'cadpagar', component: CadpagarComponent },
    { path: 'cadreceber', component: CadreceberComponent },
    { path: 'cadpagar/:id', component: CadpagarComponent },
    { path: 'cadreceber/:id', component: CadreceberComponent },
    { path: 'cadpagar/:id/:rota', component: CadpagarComponent },
    { path: 'cadreceber/:id/:rota', component: CadreceberComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);
