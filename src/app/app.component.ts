import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from './usuario/login/auth.service';
import {Usuario} from './usuario/model/usuario';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
    title = 'ac7vm-gui';
    logado = false;

    usuario: Usuario;
    specialPage: boolean;

    constructor(
        private authService: AuthService,
        private location: Location,
    private router: Router
    ) {}

    ngOnInit() {
        this.usuario = new Usuario();
        if (this.logado === false) {
            this.router.navigate(['/login']);
          }
          this.authService.mostrarMenuEmitter.subscribe(
            mostrar => this.logado = mostrar
          );
          if (this.logado === true) {
            this.usuario = this.authService.usuario;
          }
    }

    goBack(): void {
        this.location.back();
    }
}
