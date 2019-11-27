import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Acesso } from 'src/app/acesso/model/acesso';
import { UsuarioService } from '../usuario.service';
import { AcessoService } from 'src/app/acesso/acesso.service';

@Component({
  selector: 'app-cadusuario',
  templateUrl: './cadusuario.component.html',
  styleUrls: ['./cadusuario.component.scss']
})
export class CadusuarioComponent implements OnInit {

    formulario: FormGroup;
    usuarioLogado: Usuario;
    usuario: Usuario;
    acessoSelecionado: Acesso;
    acessos: Acesso[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private acessoService: AcessoService,
  ) { }

  ngOnInit() {
    this.usuarioLogado = this.authService.usuario;
    let usuario = this.usuarioService.getUsuario();
    if (this.usuario ! =null) {
      this.formulario = this.formBuilder.group({
        idusuario: usuario.idusuario,
        nome: usuario.nome,
        datanascimento: usuario.datanascimento,
        login: usuario.login,
        senha: usuario.senha,
        email: usuario.email,
        fonecelular: usuario.fonecelular,
        situacao: usuario.situacao,
        acesso: usuario.acesso,
      });
      this.acessoSelecionado = usuario.acesso;
    } else {
      this.acessoSelecionado = new Acesso();
      this.acessoSelecionado.nome = '';
      this.formulario = this.formBuilder.group({
        idusuario: [null],
        nome: [null],
        datanascimento: [null],
        login: [null],
        senha: [null],
        email: [null],
        fonecelular: [null],
        situacao: [null],
        acesso: this.acessoSelecionado
      });
    }    
  }

  listarAcesso() {
      this.acessoService.listar().subscribe(
        resposta => {
          this.acessos = resposta as any;
        }
      );
  }

  salvar() {
    this.usuario = this.formulario.value;
    this.usuarioService.salvar( this.usuario).subscribe(
      resposta => {
        this.usuario = resposta as any;
        this.router.navigate(['/consusuairo']);
      }
    );
  }

  cancelar() {
    this.formulario.reset();
    this.router.navigate(['/consusuario']);
  }

}

