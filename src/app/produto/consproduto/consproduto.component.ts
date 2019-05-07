import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-consproduto',
  templateUrl: './consproduto.component.html',
  styleUrls: ['./consproduto.component.css']
})
export class ConsProdutoComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = true;
  oneAtATime: boolean = true;



  constructor(
    private produtoservice: ProdutoService,) {}



  ngOnInit() {
    
  }

}
