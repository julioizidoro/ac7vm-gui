import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';
import { Produto } from '../model/produto';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';

@Component({
  selector: 'app-consproduto',
  templateUrl: './consproduto.component.html',
  styleUrls: ['./consproduto.component.css']
})
export class ConsProdutoComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;
    produtos: Produto[];
    usuario: Usuario;


  constructor(
    private produtoservice: ProdutoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}



  ngOnInit() {
    this.usuario = this.authService.usuario;
    this.formulario = this.formBuilder.group({
      descricao: [null]
    });
    this.consultar();
  }

  consultar() {
    this.produtoservice.listar().subscribe(
      resposta => {
        this.produtos = resposta as any;
      }
    );
  }

  editar(produto: Produto) {
    this.produtoservice.setProduto(produto);
    this.router.navigate([ '/cadproduto']);
  }

  pesquisar() {
    const descricao = this.formulario.get('descricao').value;
    if ( descricao != null) {
        this.produtoservice.pesquisarDescricao(descricao).subscribe(
          resposta => {
            this.produtos = resposta as any;
          }
        );
    }
 }

}
