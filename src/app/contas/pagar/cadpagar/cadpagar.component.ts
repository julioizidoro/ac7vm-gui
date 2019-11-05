import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Planoconta } from 'src/app/planocontas/model/planoconta';
import { Instituicao } from 'src/app/cliente/model/instituicao';
import { PlanoContasService } from 'src/app/planocontas/planocontas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Subscription } from 'rxjs';
import { Contas } from '../../model/contas';
import { Formapagamento } from 'src/app/formapagamento/model/formapagamento';
import { ContasService } from '../../contas.service';
import { FormapagamentoService } from 'src/app/formapagamento/formapagamento.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-cad0pagar',
  templateUrl: './cadpagar.component.html',
  styleUrls: ['./cadpagar.component.css']
})
export class CadpagarComponent implements OnInit {

  formulario: FormGroup;
  conta: Contas;
  planoContaSelecionado: Planoconta;
  instituicaoSelecionada: Instituicao;
  formaPagamentoSelecionada: Formapagamento;
  listaPlanoContas: Planoconta[];
  listaFormaPagamento: Formapagamento[];
  inscricao: Subscription;
  tipo: string;
  habilitar: string;

  constructor(
    private planocontaservice: PlanoContasService,
    private contasService: ContasService,
    private formBuilder: FormBuilder,
    private activeRrouter: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private formaPagamentoService: FormapagamentoService,
  ) { }

  ngOnInit() {
    this.habilitar = '';
    this.listarPlanoContas();
    this.listarFormaPagamento();
    this.setFormulario();
    this.habilitar = 'readonly';
    this.instituicaoSelecionada = this.clienteService.getCliente();
    if (this.instituicaoSelecionada == null) {
      this.instituicaoSelecionada = new Instituicao();
      this.instituicaoSelecionada.nome = '';
      this.formulario.patchValue({
        instituicao : this.instituicaoSelecionada,
      });
    }
    this.conta = this.contasService.getContas();
    if ( this.conta != null ){
      this.formulario = this.formBuilder.group({
        idcontas: this.conta.idcontas,
        documento: this.conta.documento,
        dataemissao: this.conta.dataemissao,
        datavencimento: this.conta.datavencimento,
        numeroparcela: this.conta.numeroparcela,
        valorparcela: this.conta.valorparcela,
        desconto: this.conta.desconto,
        juros: this.conta.juros,
        datapagamento: this.conta.datapagamento,
        valorpago : this.conta.valorpago,
        observacao: this.conta.observacao,
        instituicao: this.conta.instituicao,
        planocontas: this.conta.planoconta,
        formapagamento: this.conta.formapagamento
      });
    }
  }

  listarPlanoContas() {
    this.planocontaservice.listar().subscribe(
      resposta => {
        this.listaPlanoContas = resposta as any;
      }
    );
  }

  listarFormaPagamento() {
    this.formaPagamentoService.listar().subscribe(
      resposta => {
        this.listaFormaPagamento = resposta as any;
      }
    );
  }

  compararFormaPagamento(obj1, obj2) {
    return obj1 && obj2 ? obj1.idloja === obj2.idloja : obj1 === obj2;
  }

  setFormaPagamento() {
    this.formaPagamentoSelecionada = this.formulario.get('formapagamento').value;
  }

  compararPalnoConta(obj1, obj2) {
    return obj1 && obj2 ? obj1.idloja === obj2.idloja : obj1 === obj2;
  }

  setPlanoConta() {
    this.planoContaSelecionado = this.formulario.get('planocontas').value;
  }

  consultaCliente() {
      this.router.navigate(['/consFornecedores' ,  'contasp']);
  }

    salvar() {
      this.conta = this.formulario.value;
      this.conta.instituicao = this.instituicaoSelecionada;
      this.conta.planoconta = this.planoContaSelecionado;
      this.conta.formapagamento = this.formaPagamentoSelecionada;
      this.conta.valorpago = 0;
      this.conta.desconto = 0;
      this.conta.juros = 0;
      this.conta.tipo = 'r';
      this.contasService.salvarCP( this.conta).subscribe(
        resposta => {
          this.conta = resposta as any;
          this.router.navigate(['/cadreceber']);
        },
        err => {
          console.log(err.error.erros.join(' '));
        }
      );
    }

    cancelar() {
      this.formulario.reset();
      this.router.navigate(['/conspagar']);
    }

    setFormulario() {
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
        instituicao: [null],
        planocontas: [null],
        formapagamento: [null],
      });
    }
}

