import { FluxocaixaService } from './fluxocaixa.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  fluxoCaixaSelecionado: Fluxocaixa;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fluxoCaixaService: FluxocaixaService,
    private activeRrouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.fluxoCaixaSelecionado = new Fluxocaixa();
    this.formulario = this.formBuilder.group({
      datainicial: [null],
      datafinal: [null],
    });
    let data: Date;
    this.activeRrouter.params.subscribe(params => {
      data = params.data;
      if (data != null) {
        this.fluxoCaixaService.getData(data).subscribe(
          resposta => {
            this.fluxoCaixa = resposta as any;
            if (this.fluxoCaixa.length > 0) {
              this.selectFluxoCaixa(this.fluxoCaixa[0]);
            }
          },
            err => {
              console.log(err.error.erros.join(' '));
          }
          );
      } else {
        this.listar();
      }
    },
      err1 => {
        console.log(err1.error.erros.join(' '));
    }
    );
  }

  listar() {
    this.fluxoCaixaService.listar().subscribe(
      resposta => {
        this.fluxoCaixa = resposta as any;
        if (this.fluxoCaixaService != null) {
          if (this.fluxoCaixa.length > 0 ) {
            this.selectFluxoCaixa(this.fluxoCaixa[0]);
          }
        }
      }
    );
  }

  selectFluxoCaixa(fluxoCaixa: Fluxocaixa) {
    this.fluxoCaixaSelecionado = fluxoCaixa;
  }

}
