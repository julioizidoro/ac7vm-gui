import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Instituicao } from '../model/instituicao';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consucliente',
  templateUrl: './consucliente.component.html',
  styleUrls: ['./consucliente.component.css']
})
export class ConsuclienteComponent implements OnInit {

    formulario: FormGroup;
    isFirstOpen = false;
    oneAtATime: true;
    instituicao: Instituicao[];



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService) {}



  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
    this.consultar();
  }


    consultar() {
      this.clienteService.listar('c').subscribe(
        resposta => {
          this.instituicao = resposta as any;
        }
      );
    }

    pesquisar() {
       const nome = this.formulario.get('nome').value;
       const email = this.formulario.get('email').value;
       this.clienteService.pesquisar(nome, email).subscribe(
        resposta => {
          this.instituicao = resposta as any;
        }
      );
    }

    editar(instituicao: Instituicao) {
      console.log(instituicao);
      this.router.navigate([ '/cadcliente' ,   instituicao.idinstituicao ]);
    }



}
