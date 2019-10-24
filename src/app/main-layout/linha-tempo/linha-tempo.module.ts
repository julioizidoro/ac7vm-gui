import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinhaTempoComponent } from './linha-tempo.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ChartModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    LinhaTempoComponent,
  ],
  exports: [
    LinhaTempoComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: []
})
export class LinhaTempoModule {

}
