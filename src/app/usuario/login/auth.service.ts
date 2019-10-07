import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';
import { Acesso } from '../model/acesso';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.usuario = new Usuario();
    this.usuario.acesso = new Acesso();
  }


  fazerLogin(login: string, senha: string) {
    this.usuarioService.logar(login, senha).subscribe(
      resposta => {
        this.usuario = resposta as Usuario;
        console.log(this.usuario);
        if ( this.usuario != null ) {
          this.router.navigate([ '/' ]);
        } else {
          this.router.navigate([ '/login' ]);
        }
      },
      err => {
        console.log(err.error.erros.join(' '));
      }
    );

  }
}
