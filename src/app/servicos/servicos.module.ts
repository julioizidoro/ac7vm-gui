import { ServicosService } from './servicos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsServicosComponent } from '../servicos/consservicos/consservicos.component';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CadServicosComponent } from '../servicos/cadservicos/cadservicos.component';

@NgModule({
  declarations: [
    ConsServicosComponent,
    CadServicosComponent
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
    ConsServicosComponent,
    CadServicosComponent
  ],
  providers: [
    ServicosService,
  ]
})
export class ServicoModule { }
