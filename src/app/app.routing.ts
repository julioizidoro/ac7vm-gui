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

const APP_ROUTER: Routes = [
    { path: '', component: AppComponent },
    { path: 'consCliente', component: ConsuclienteComponent },
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
    { path: 'cadplanocontas/:id', component: CadsPlanoContasComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);
