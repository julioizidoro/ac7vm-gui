import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsuclienteComponent } from '../consucliente/consucliente.component';
import { CadclienteComponent } from '../cadcliente/cadcliente.component';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ConsuclienteComponent,
    CadclienteComponent
  ],
  imports: [
    CommonModule,
    routing,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [
    CadclienteComponent,
    ConsuclienteComponent
  ]
})
export class ClienteModule { }
