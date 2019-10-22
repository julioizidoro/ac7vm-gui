import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Acesso} from './usuario/model/acesso';
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

    usuario = new Usuario();
    acesso = new Acesso();
    specialPage: boolean;

    constructor(
        private authService: AuthService,
        private location: Location,
    private router: Router
    ) {}

    ngOnInit() {
        if (this.logado === false) {
            this.router.navigate(['/login']);
          }
          this.authService.mostrarMenuEmitter.subscribe(
            mostrar => this.logado = mostrar
          );
    }

    goBack(): void {
        this.location.back();
    }
}
