import { BensService } from './../bens.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Planocontas } from 'src/app/planocontas/model/planoconta';
import { Router } from '@angular/router';
import { PlanoContasService } from 'src/app/planocontas/planocontas.service';
import { Bens } from '../model/bens';

@Component({
  selector: 'app-consbens',
  templateUrl: './consbens.component.html',
  styleUrls: ['./consbens.component.css']
})
export class ConsbensComponent implements OnInit {

  formulario: FormGroup;
  isFirstOpen = false;
  oneAtATime = true;
  planoContas: Planocontas[];
  planoContasSelecinado: Planocontas;
  bens: Bens[];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private planocontaservice: PlanoContasService,
              private bensService: BensService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao: [null],
      planoconta: [null],
    });
    this.listarPlanoContas();
    this.consultar();
  }

  listarPlanoContas() {
    this.planocontaservice.pesquisarBens().subscribe(
      resposta => {
        this.planoContas = resposta as any;
      }
    );
  }

  consultar() {
    this.bensService.listar().subscribe(
      resposta => {
        this.bens = resposta as any;
      }
    );
    this.formulario.reset();
  }

  compararPalnoConta(obj1, obj2) {
    return obj1 && obj2 ? obj1.idloja === obj2.idloja : obj1 === obj2;
  }

  setPlanoConta() {
    this.planoContasSelecinado = this.formulario.get('planoconta').value;
  }

  pesquisar() {
    const descricao = this.formulario.get('descricao').value;
    if ( descricao != null) {
        this.bensService.pesquisarDescricao(descricao).subscribe(
          resposta => {
            this.bens = resposta as any;
          }
        );
    } else {
     const planoconta = this.formulario.get('planoconta').value;
     if (( planoconta != null ) && ( planoconta.length > 0)) {
        this.bensService.pesquisarPlanoContas(this.planoContasSelecinado.idplanoconta).subscribe(
          resposta => {
           this.bens = resposta as any;
          }
        );
      }
    }
    // tslint:disable-next-line:no-unused-expression
    this.formulario.reset;
  }

  comDataSaida(bem: Bens) {
    if ( bem.datasaida === null) {
      return false;
    } else {
      return true;
    }
  }

  semDataSaida(bem: Bens) {
    if ( bem.datasaida === null) {
      return true;
    } else {
      return false;
    }
  }

  novo() {
    this.router.navigate([ '/cadbens' ,   'e' ]);
  }

  editar( bem: Bens) {
    this.router.navigate([ '/cadbens' ,   'e', bem.idbens ]);
  }

  saida( bem: Bens ) {
    this.router.navigate([ '/cadbens' ,   's', bem.idbens ]);
  }

  visualizar( bem: Bens) {
    this.router.navigate([ '/cadbens' ,   'v', bem.idbens ]);
  }
}
