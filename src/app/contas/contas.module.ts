import { ContasService } from './contas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadcontasComponent } from './cadcontas/cadcontas.component';
import { ConscontasComponent } from './conscontas/conscontas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { routing } from '../app.routing';

@NgModule({
  declarations: [CadcontasComponent, ConscontasComponent],
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
  ],
  exports: [
    CadcontasComponent,
    ConscontasComponent
  ],
  providers: [
    ContasService,
  ]

})
export class ContasModule { }
