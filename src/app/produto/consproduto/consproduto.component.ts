import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consproduto',
  templateUrl: './consproduto.component.html',
  styleUrls: ['./consproduto.component.css']
})
export class ConsProdutoComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;



  constructor(
    private produtoservice: ProdutoService,
    private formBuilder: FormBuilder,
    private router: Router) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao: [null]
    });
  }

}
