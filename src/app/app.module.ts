import { ShareModule } from './share/share.module';
import { ClienteService } from './cliente/cliente.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultacepService } from './share/consultacep.service';
import {NgxMaskModule} from 'ngx-mask'; 
import { FornecedoresModule } from './fornecedores/fornecedores.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ClienteModule,
    ShareModule,
    NgxMaskModule.forRoot(),
    routing,
    AppRoutingModule,
    FornecedoresModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
