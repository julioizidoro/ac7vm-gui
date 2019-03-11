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
import { ObrasModule } from './obras/obras.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ServicoModule } from './servicos/servicos.module';
import { GrupoContasModule } from './grupocontas/grupocontas.module';
import { ProdutoModule } from './produto/produto.module';
import { FaseObraModule } from './faseobra/faseobra.module';
 
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
    ObrasModule,
    FornecedoresModule,
    ServicoModule,
    GrupoContasModule,
    ProdutoModule,
    FaseObraModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
