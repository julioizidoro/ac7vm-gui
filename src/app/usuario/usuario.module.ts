import { UsuarioService } from './usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {IconsModule, MdbIconComponent} from 'angular-bootstrap-md';
import { CadusuarioComponent } from './cadusuario/cadusuario.component';
import { ConsusuarioComponent } from './consusuario/consusuario.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    LoginComponent,
    CadusuarioComponent,
    ConsusuarioComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    ReactiveFormsModule,
    TextMaskModule,
    AccordionModule.forRoot(),
  ],
  exports: [
    LoginComponent,
    CadusuarioComponent,
    ConsusuarioComponent,
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
