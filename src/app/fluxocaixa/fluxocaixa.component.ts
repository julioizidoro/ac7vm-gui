import { Instituicao } from 'src/app/cliente/model/instituicao';
import { Fluxocontas } from './model/fluxoconta';
import { Fluxolancamento } from './model/fluxolancamento';
import { FluxocaixaService } from './fluxocaixa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Fluxocaixa } from './model/fluxocaixa';
import { Subscription } from 'rxjs/internal/Subscription';
import { Contas } from '../contas/model/contas';

@Component({
  selector: 'app-fluxocaixa',
  templateUrl: './fluxocaixa.component.html',
  styleUrls: ['./fluxocaixa.component.scss']
})
export class FluxocaixaComponent implements OnInit {

  pformulario: FormGroup;
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
    this.IniciaFormulario();
    this.fluxoCaixaSelecionado = new Fluxocaixa();
    this.pformulario = this.formBuilder.group({
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
            if (this.fluxoCaixa[0].fluxolancamentoList == null) {
              this.fluxoCaixa[0].fluxolancamentoList.push(new Fluxolancamento());
            }
            if (this.fluxoCaixa[0].fluxocontasList == null) {
            }
            this.selectFluxoCaixa(this.fluxoCaixa[0]);
            this.setFormulario(this.fluxoCaixa[0].fluxocontasList[0].contas);
          }
        }
      }
    );
  }

  selectFluxoCaixa(fluxoCaixa: Fluxocaixa) {
    this.fluxoCaixaSelecionado = fluxoCaixa;
  }

  selectFluxoCaixaConta(fluxoconta: Fluxocontas) {
    this.formulario.reset();
    this.setFormulario(fluxoconta.contas);
    return 'centralLarge.show()';
  }

  setFormulario(conta: Contas) {
    this.formulario = this.formBuilder.group({
      idcontas: conta.idcontas,
      documento: conta.documento,
      dataemissao: conta.dataemissao,
      datavencimento: conta.datavencimento,
      numeroparcela: conta.numeroparcela,
      valorparcela: conta.valorparcela,
      desconto: conta.desconto,
      juros: conta.juros,
      datapagamento: conta.datapagamento,
      valorpago : conta.valorpago,
      observacao: conta.observacao,
      instituicao: conta.instituicao,
      planocontas: conta.planoconta,
      formapagamento: conta.formapagamento,
    });
  }

  IniciaFormulario() {
    let instituicao: Instituicao;
    instituicao = new Instituicao();
    instituicao.nome = '';
    this.formulario = this.formBuilder.group({
      idcontas: [null],
      documento: [null],
      dataemissao: new Date(),
      datavencimento: [null],
      numeroparcela: [null],
      valorparcela: [null],
      desconto: [null],
      juros: [null],
      datapagamento: [null],
      valorpago : 0,
      observacao: [null],
      instituicao: instituicao,
      planocontas: [null],
      formapagamento: [null],
    });
  }

}
