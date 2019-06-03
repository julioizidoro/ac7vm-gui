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
import { ObrasModule } from './obras/obras.module';
import { ServicoModule } from './servicos/servicos.module';
import { GrupoContasModule } from './grupocontas/grupocontas.module';
import { ProdutoModule } from './produto/produto.module';
import { FaseObraModule } from './faseobra/faseobra.module';
import { PlanoContasModule } from './planocontas/planocontas.module';
import { TextMaskModule } from 'angular2-text-mask';

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
    routing,
    AppRoutingModule,
    ObrasModule,
    ServicoModule,
    GrupoContasModule,
    ProdutoModule,
    FaseObraModule,
    TextMaskModule,
    PlanoContasModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
