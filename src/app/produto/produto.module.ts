import { ProdutoService } from './produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsProdutoComponent } from '../produto/consproduto/consproduto.component';
import { routing } from '../app.routing';
import { AccordionModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CadProdutoComponent } from '../produto/cadproduto/cadproduto.component';

@NgModule({
  declarations: [
    ConsProdutoComponent,
    CadProdutoComponent
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
    ConsProdutoComponent
  ],
  providers: [
    ProdutoService,
  ]
})
export class ProdutoModule { }
