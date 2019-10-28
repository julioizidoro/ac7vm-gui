import { FluxocaixaService } from './fluxocaixa.service';
import { FluxocaixaComponent } from './fluxocaixa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from '../app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    FluxocaixaComponent,
  ],
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
  ],
  exports: [
    FluxocaixaComponent
  ],
  providers: [
    FluxocaixaService
  ]
})
export class FluxocaixaModule { }
