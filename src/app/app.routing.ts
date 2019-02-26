import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTER: Routes = [
    { path: '', component: AppComponent },
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);