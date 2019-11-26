import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../model/produto';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadProdutoComponent implements OnInit {

    formulario: FormGroup;
    produto: Produto;
    usuario: Usuario;



  constructor(
    private produtoservice: ProdutoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRrouter: ActivatedRoute,
    private authService: AuthService,
  ){}



  ngOnInit() {
    this.usuario = this.authService.usuario;
    this.formulario = this.formBuilder.group({
      idproduto: [null],
      descricao: [null],
      unidade: [null],
      quantidademinima: [null]
    });
    this.produto = this.produtoservice.getProduto();
    if (this.produto !=null){
      this.formulario = this.formBuilder.group({
        idproduto: this.produto.idproduto,
        descricao: this.produto.descricao,
        unidade: this.produto.unidade,
        quantidademinima: this.produto.quantidademinima
      });
    }
    
  }

  salvar() {
    this.produto = this.formulario.value;
    this.produtoservice.salvar( this.produto ).subscribe(
      resposta => {
        this.produto = resposta as any;
        this.router.navigate(['/consproduto']);
      }
    );
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate(['/consproduto']);
  }

}
