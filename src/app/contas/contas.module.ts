import { ContasService } from './contas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { routing } from '../app.routing';
import { CadpagarComponent } from './pagar/cadpagar/cadpagar.component';
import { ConspagarComponent } from './pagar/conspagar/conspagar.component';
import { CadreceberComponent } from './receber/cadreceber/cadreceber.component';
import { ConsreceberComponent } from './receber/consreceber/consreceber.component';

@NgModule({
  declarations: [
    CadpagarComponent,
    ConspagarComponent,
    CadreceberComponent,
    ConsreceberComponent],
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
  ],
  exports: [
    CadpagarComponent,
    ConspagarComponent,
    CadreceberComponent,
    ConsreceberComponent
  ],
  providers: [
    ContasService,
  ]

})
export class ContasModule { }
