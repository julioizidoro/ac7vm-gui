import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadclienteComponent } from './cadcliente/cadcliente.component';
import { ConsuclienteComponent } from './consucliente/consucliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CadclienteComponent,
    ConsuclienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
