import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Acesso } from 'src/app/acesso/model/acesso';

@Component({
  selector: 'app-consusuario',
  templateUrl: './consusuario.component.html',
  styleUrls: ['./consusuario.component.scss']
})
export class ConsusuarioComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuario = this.authService.usuario;
    this.consultar();
  }

  consultar() {
    this.usuarioService.listar().subscribe(
      resposta => {
        this.usuarios = resposta as any;
      }
    );
  }

  editar(usuario: Usuario) {
    this.usuarioService.setUsuario(usuario);
    this.router.navigate([ '/cadusuario']);
  }

}
