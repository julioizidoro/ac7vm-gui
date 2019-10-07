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

    usuario = new Usuario();
    acesso = new Acesso();
    specialPage: boolean;

    constructor(
        private authService: AuthService,
        private location: Location,
    private router: Router
    ) {}

    ngOnInit() {
        console.log(this.usuario.idusuario);
        this.usuario = this.authService.usuario;
        if (this.usuario.idusuario == null) {
            this.router.navigate(['/login']);
        }
        this.acesso = this.authService.usuario.acesso;
    }

    goBack(): void {
        this.location.back();
    }
}
