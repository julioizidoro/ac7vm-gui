import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;
  usuario: Usuario;
  formulario: FormGroup;
  caminhoFoto: string;

  constructor(
      private authService: AuthService,
      private router: Router,
      private formBuilder: FormBuilder,
  ) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
    this.setFormulario();
    this.usuario = this.authService.usuario;
    this.caminhoFoto = 'https://minhasfotos.s3-sa-east-1.amazonaws.com/' + this.usuario.idusuario + '.jpg';
    console.log(this.caminhoFoto);
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  logof() {
    this.authService.fazerLogof();
    this.authService.mostrarMenuEmitter.unsubscribe();
    this.router.navigate(['/login']);
  }

  setFormulario() {
    this.formulario = this.formBuilder.group({
      senhaatual: [null], 
      novasenha: [null],
      confirmanovasenha: [null],
    });
  }
  alterarSenha() {
    let senha = this.formulario.get('senhaatual').value;
    let novasenha = this.formulario.get('novasenha').value;
    let confirmanovasenha = this.formulario.get('confirmanovasenha').value;
  }

}
