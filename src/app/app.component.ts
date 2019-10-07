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

    private currentUrl = '';


    constructor(
        private authService: AuthService,
        private location: Location,
    private router: Router
    ) {
        this.router.events.subscribe((route: any) => {
            this.currentUrl = route.url;
        });
    }

    ngOnInit() {
        this.usuario = this.authService.usuario;
        console.log(this.usuario.acesso.aso);
        if (this.usuario.idusuario == null) {
            this.router.navigate(['/login']);
        } else {
            console.log(this.usuario.acesso.cadastro);
        }
        this.acesso = this.authService.usuario.acesso;
    }

    goBack(): void {
        this.location.back();
    }
}
