import { FornecedoresService } from './fornecedores.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsuFornecedoresComponent } from '../fornecedores/consfornecedores/consfornecedores.component';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CadFornecedoresComponent } from '../fornecedores/cadfornecedores/cadfornecedores.component';

@NgModule({
  declarations: [
    ConsuFornecedoresComponent,
    CadFornecedoresComponent
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
    ConsuFornecedoresComponent
  ],
  providers: [
    FornecedoresService,
  ]
})
export class FornecedoresModule { }
