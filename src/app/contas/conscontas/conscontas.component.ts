import { ContasService } from './../contas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contas } from '../model/contas';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conscontas',
  templateUrl: './conscontas.component.html',
  styleUrls: ['./conscontas.component.css']
})
export class ConscontasComponent implements OnInit {

  formulario: FormGroup;
  isFirstOpen = false;
  oneAtATime = true;
  contas: Contas[];
  tipo: string;
  inscricao: Subscription;
  titulo: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contasService: ContasService,
    private activeRrouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.inscricao = this.activeRrouter.params.subscribe(params => {
      this.tipo = params.tipo;
      if (this.tipo === 'r') {
        this.titulo = 'Contas a Receber';
      } else {
        this.titulo = 'Contas a Pagar';
      }
    });
    this.formulario = this.formBuilder.group({
      documento: [null],
      cliente: [null],
      datainicial: [null],
      datafinal: [null]
    });
    this.consultar();
  }

  consultar() {
    this.contasService.listar(this.tipo).subscribe(
      resposta => {
        this.contas = resposta as any;
      }
    );
    this.formulario.reset();
  }

  pesquisar() {

  }

}
