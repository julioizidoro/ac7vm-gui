import { FormapagamentoService } from './../../formapagamento/formapagamento.service';
import { Formapagamento } from './../../formapagamento/model/formapagamento';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contas } from '../model/contas';
import { Planocontas } from 'src/app/planocontas/model/planoconta';
import { Instituicao } from 'src/app/cliente/model/instituicao';
import { PlanoContasService } from 'src/app/planocontas/planocontas.service';
import { ContasService } from '../contas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadcontas',
  templateUrl: './cadcontas.component.html',
  styleUrls: ['./cadcontas.component.css']
})
export class CadcontasComponent implements OnInit {

  formulario: FormGroup;
  conta: Contas;
  planoContaSelecionado: Planocontas;
  instituicaoSelecionada: Instituicao;
  listaPlanoContas: Planocontas[];
  listaFormaPagamento: Formapagamento[];
  inscricao: Subscription;

  constructor(
    private planocontaservice: PlanoContasService,
    private contasService: ContasService,
    private formBuilder: FormBuilder,
    private activeRrouter: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private formaPagamentoServico: FormapagamentoService,
  ) { }

  ngOnInit() {
    this.listarPlanoContas();
    this.instituicaoSelecionada = new Instituicao();
    this.instituicaoSelecionada.nome = '';
    let id;
    let rota;
    this.inscricao = this.activeRrouter.params.subscribe(params => {
      id = params.id;
      rota = params.rota;
    });
    if ( rota === 'conscliente') {
      this.clienteService.pesquisarId(id).subscribe(
        resposta => {
          this.instituicaoSelecionada = resposta as Instituicao;
        },
        error => {
          console.log(error.error.erros.join(' '));
        }
    );
    } else {
      if (id != null) {
      this.contasService.getConta(id).subscribe(
        resposta => {
          this.conta = resposta as Contas;
          this.planoContaSelecionado = this.conta.planocontas;
          this.instituicaoSelecionada = this.conta.instituicao;
          this.formulario = this.formBuilder.group({
            idcontas: this.conta.idocntas,
            documento: this.conta.documento,
            dataemissao: this.conta.dataemissao,
            datavencimento: this.conta.datavencimento,
            valorparcela: this.conta.valorparcela,
            desconto: this.conta.desconto,
            juros: this.conta.juros,
            datapagamento: this.conta.datapagamento,
            valorpago : this.conta.valorpago,
            observacao: this.conta.observacao,
          });
        },
        error => {
          console.log(error.error.erros.join(' '));
        }
    );
      }
    }
  }





  listarPlanoContas() {
    this.planocontaservice.listar().subscribe(
      resposta => {
        this.listaPlanoContas = resposta as any;
      }
    );
  }

}
