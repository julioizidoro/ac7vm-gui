import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  uusario: Usuario;

  idusuario: number;
  nome: string;
  fonecelular: string;
  user: string;
  password: string;
  email: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      idusuario: [null],
      nome: [null],
      nascimento: [null],
      login: [null],
      senha: [null],
      sexo: [null],
      email: [null],
      fonecelular: [null],
      situacao: [null],
      acesso: [null],
    });

  }

  logar() {
    this.uusario = this.formulario.value;
    this.authService.fazerLogin(this.uusario);
  }
}
