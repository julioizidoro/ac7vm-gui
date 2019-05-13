import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadProdutoComponent implements OnInit {

    formulario: FormGroup;



  constructor(
    private produtoservice: ProdutoService,
    private formBuilder: FormBuilder,
    private router: Router) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao: [null],
      unidade: [null],
      quantidade: [null]
    });
  }

}
