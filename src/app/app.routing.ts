import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ConsuclienteComponent } from './consucliente/consucliente.component';
import { CadclienteComponent } from './cadcliente/cadcliente.component';

const APP_ROUTER: Routes = [
    { path: '', component: AppComponent },
    { path: 'consCliente', component: ConsuclienteComponent },
    { path: 'cadCliente', component: CadclienteComponent }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);