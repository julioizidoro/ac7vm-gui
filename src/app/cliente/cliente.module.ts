import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsuclienteComponent } from '../consucliente/consucliente.component';
import { CadclienteComponent } from '../cadcliente/cadcliente.component';
import { routing } from '../app.routing';

@NgModule({
  declarations: [
    ConsuclienteComponent,
    CadclienteComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    CadclienteComponent,
    ConsuclienteComponent
  ]
})
export class ClienteModule { }
