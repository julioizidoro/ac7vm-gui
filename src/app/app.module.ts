import { FormapagamentoModule } from './formapagamento/formapagamento.module';
import { ContasModule } from './contas/contas.module';
import { BensModule } from './bens/bens.module';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObrasModule } from './obras/obras.module';
import { ServicoModule } from './servicos/servicos.module';
import { GrupoContasModule } from './grupocontas/grupocontas.module';
import { ProdutoModule } from './produto/produto.module';
import { FaseObraModule } from './faseobra/faseobra.module';
import { PlanoContasModule } from './planocontas/planocontas.module';
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavigationModule} from './main-layout/navigation/navigation.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import {LinhaTempoModule} from './main-layout/linha-tempo/linha-tempo.module';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
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
    PlanoContasModule,
    BensModule,
    ContasModule,
    FormapagamentoModule,
    BrowserAnimationsModule,
    NavigationModule,
    DashboardModule,
    LinhaTempoModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
