import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Obrafase } from '../model/obrafase';
import { Router } from '@angular/router';
import { FaseObraService } from '../faseobra.service';
import { Usuario } from 'src/app/usuario/model/usuario';
import { AuthService } from 'src/app/usuario/login/auth.service';

@Component({
  selector: 'app-consfaseobra',
  templateUrl: './consfaseobra.component.html',
  styleUrls: ['./consfaseobra.component.css']
})
export class ConsFaseObraComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime = true;
    obraFases: Obrafase[];
    usuario: Usuario;

  constructor(
    private router: Router,
    private faseObraService: FaseObraService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
   ) {}



  ngOnInit() {
    this.usuario = this.authService.usuario;
    this.formulario = this.formBuilder.group({
      descricao: [null],
      conta: [null],
    });
    this.consultar();
  }

  consultar() {
    this.faseObraService.listar().subscribe(
      resposta => {
        this.obraFases = resposta as any;
      }
    );
  }

  editar(obraFase: Obrafase) {
    this.faseObraService.setFaseObra(obraFase);
    this.router.navigate([ '/cadfaseobra' ]);
  }

  pesquisar() {
    const descricao = this.formulario.get('descricao').value;
    const conta = this.formulario.get('conta').value;
    this.formulario.reset();
    if ( descricao != null) {
        this.faseObraService.pesquisarDescricao(descricao).subscribe(
          resposta => {
            this.obraFases = resposta as any;
          }
        );
    } else if (( conta != null ) && ( conta.length > 0)) {
        this.faseObraService.pesquisarConta(conta).subscribe(
          resposta => {
            this.obraFases = resposta as any;
          }
        );
    }
 }

}
