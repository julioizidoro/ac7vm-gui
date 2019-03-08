import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ConsuclienteComponent } from './cliente/consucliente/consucliente.component';
import { CadclienteComponent } from './cliente/cadcliente/cadcliente.component';
import { ConsuFornecedoresComponent } from './fornecedores/consfornecedores/consfornecedores.component';
import { CadFornecedoresComponent } from './fornecedores/cadfornecedores/cadfornecedores.component';
import { ConsObrasComponent } from './obras/consobras/consobras.component';
import { CadObrasComponent } from './obras/cadobras/cadobras.component';
import { ConsServicosComponent } from './servicos/consservicos/consservicos.component';
import { CadServicosComponent } from './servicos/cadservicos/cadservicos.component';

const APP_ROUTER: Routes = [
    { path: '', component: AppComponent },
    { path: 'consCliente', component: ConsuclienteComponent },
    { path: 'cadCliente', component: CadclienteComponent },
    { path: 'consFornecedores', component: ConsuFornecedoresComponent },
    { path: 'cadFornecedores', component: CadFornecedoresComponent },
    { path: 'consobras', component: ConsObrasComponent },
    { path: 'cadobras', component: CadObrasComponent },
    { path: 'consservicos', component: ConsServicosComponent },
    { path: 'cadservicos', component: CadServicosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);
