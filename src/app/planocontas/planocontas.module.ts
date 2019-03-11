import { PlanoContasService } from './planocontas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsPlanoContasComponent } from './consplanocontas/consplanocontas.component';
import { CadsPlanoContasComponent } from './cadplanocontas/cadplanocontas.component';

@NgModule({
  declarations: [
    ConsPlanoContasComponent,
    CadsPlanoContasComponent
  ],
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [
    ConsPlanoContasComponent
  ],
  providers: [
    PlanoContasService,
  ]
})
export class PlanoContasModule { }
