import { UsuarioService } from './usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {UsuarioComponent} from './usuario.component';
import { LoginComponent } from './login/login.component';
import {IconsModule, MdbIconComponent} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    UsuarioComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UsuarioComponent,
    LoginComponent,
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
