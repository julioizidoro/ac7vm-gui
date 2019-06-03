import { ConsuFornecedoresComponent } from './consucliente/consfornecedores.component';
import { CadFornecedoresComponent } from './cadcliente/cadfornecedores.component';
import { ClienteService } from './cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsuclienteComponent } from '../cliente/consucliente/consucliente.component';
import { CadclienteComponent } from '../cliente/cadcliente/cadcliente.component';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    ConsuclienteComponent,
    CadclienteComponent,
    CadFornecedoresComponent,
    ConsuFornecedoresComponent,
  ],
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TextMaskModule,
  ],
  exports: [
    CadclienteComponent,
    ConsuclienteComponent,
    CadFornecedoresComponent,
    ConsuFornecedoresComponent,
  ],
  providers: [
    ClienteService,
  ]
})
export class ClienteModule { }
