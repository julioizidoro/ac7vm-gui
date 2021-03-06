import { ServicosService } from '../servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Servicos } from '../model/servicos';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';

@Component({
  selector: 'app-consservicos',
  templateUrl: './consservicos.component.html',
  styleUrls: ['./consservicos.component.css']
})
export class ConsServicosComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;
    servicos: Servicos[];
    usuario: Usuario;



  constructor(
    private servicosService: ServicosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService, 
  ) {}


  ngOnInit() {
    this.usuario = this.authService.usuario;
    this.formulario = this.formBuilder.group({
      descricao: [null],
      conta: [null]
    });
    this.consultar();
  }

  consultar() {
      this.servicosService.listar().subscribe(
        resposta => {
          this.servicos = resposta as any;
        }
      );
  }

  pesquisar() {
    const descricao = this.formulario.get('descricao').value;
    const conta = this.formulario.get('conta').value;
    this.formulario.reset();
    if ( descricao != null) {
        this.servicosService.pesquisarDescricao(descricao).subscribe(
          resposta => {
            this.servicos = resposta as any;
          }
        );
    } else if (( conta != null ) && ( conta.length > 0)) {
        this.servicosService.pesquisarConta(conta).subscribe(
          resposta => {
            this.servicos = resposta as any;
          }
        );
    }
 }

 editar(servico: Servicos) {
   this.servicosService.setServico(servico);
  this.router.navigate([ '/cadservicos']);
 }

}
