import { Acesso } from './usuario/model/acesso';
import { Component } from '@angular/core';
import { AuthService } from './usuario/login/auth.service';
import { Router } from '@angular/router';
import { Usuario } from './usuario/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ac7vm-gui';

  usuario = new Usuario();
  acesso = new Acesso();


  constructor(
    private authService: AuthService,
    private router: Router
    ) {
      console.log('teste');
    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
    this.usuario = this.authService.usuario;
    console.log(this.usuario.acesso.aso);
    if ( this.usuario.idusuario == null ) {
        this.router.navigate([ '/login' ]);
    } else {
     console.log(this.usuario.acesso.cadastro);
    }
    this.acesso = this.authService.usuario.acesso;
  }
}
