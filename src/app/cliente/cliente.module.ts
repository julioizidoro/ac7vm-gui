import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsuclienteComponent } from '../consucliente/consucliente.component';
import { CadclienteComponent } from '../cadcliente/cadcliente.component';

@NgModule({
  declarations: [
    ConsuclienteComponent,
    CadclienteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CadclienteComponent,
    ConsuclienteComponent
  ]
})
export class ClienteModule { }
