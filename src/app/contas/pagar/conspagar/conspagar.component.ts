import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contas } from '../../model/contas';
import { ContasService } from '../../contas.service';

@Component({
  selector: 'app-conspagar',
  templateUrl: './conspagar.component.html',
  styleUrls: ['./conspagar.component.css']
})
export class ConspagarComponent implements OnInit {

  formulario: FormGroup;
  isFirstOpen = false;
  oneAtATime = true;
  contas: Contas[];
  inscricao: Subscription;
  pagas: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contasService: ContasService,
    private activeRrouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      documento: [null],
      cliente: [null],
      datainicial: [null],
      datafinal: [null],
      tipoConta: ['todas'],
    });
    this.consultar();
  }

  consultar() {
      this.contasService.listarCR().subscribe(
        resposta => {
          this.contas = resposta as any;
        }
      );
      this.formulario.reset();
      this.formulario.reset();
    }

  pesquisar() {

  }

}
