import { FluxocaixaService } from './../fluxocaixa/fluxocaixa.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import {LinhaTempoModule} from '../main-layout/linha-tempo/linha-tempo.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
      LinhaTempoModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    FluxocaixaService,
  ]
})
export class DashboardModule {

}
