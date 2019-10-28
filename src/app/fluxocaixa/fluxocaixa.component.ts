import { FluxocaixaService } from './fluxocaixa.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Fluxocaixa } from './model/fluxocaixa';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-fluxocaixa',
  templateUrl: './fluxocaixa.component.html',
  styleUrls: ['./fluxocaixa.component.scss']
})
export class FluxocaixaComponent implements OnInit {

  formulario: FormGroup;
  isFirstOpen = false;
  oneAtATime = true;
  fluxoCaixa: Fluxocaixa[];
  inscricao: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fluxoCaixaService: FluxocaixaService,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      datainicial: [null],
      datafinal: [null],
    });
    this.listar();
  }

  listar() {
    this.fluxoCaixaService.listar().subscribe(
      resposta => {
        this.fluxoCaixa = resposta as any;
      }
    );
  }

}
