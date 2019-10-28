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

@Component({
  selector: 'app-cadreceber',
  templateUrl: './cadreceber.component.html',
  styleUrls: ['./cadreceber.component.css']
})
export class CadreceberComponent implements OnInit {

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
    this.setFormulario();
    this.habilitar = 'readonly';
    this.instituicaoSelecionada = new Instituicao();
    this.instituicaoSelecionada.nome = '';
    let id;
    let rota;
    this.inscricao = this.activeRrouter.params.subscribe(params => {
      id = params.id;
      rota = params.rota;
      this.tipo = params.tipo;
    });
    if ( rota === 'conscliente') {
      console.log(rota);
      this.clienteService.pesquisarId(id).subscribe(
        resposta => {
          this.instituicaoSelecionada = resposta as Instituicao;
          if (this.instituicaoSelecionada != null ) {
            this.formulario.patchValue({
              instituicao : this.instituicaoSelecionada,
            });
            this.habilitar = '';
            this.listarPlanoContas();
            this.listarFormaPagamento();
          }
        },
        error => {
          console.log(error.error.erros.join(' '));
        }
    );
    } else {
      if (id != null) {
      this.contasService.getcrId(id).subscribe(
        resposta => {
          this.conta = resposta as Contas;
          this.planoContaSelecionado = this.conta.planoconta;
          this.instituicaoSelecionada = this.conta.instituicao;
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

  listarFormaPagamento() {
    this.formaPagamentoService.listar().subscribe(
      resposta => {
        this.listaFormaPagamento = resposta as any;
        console.log('forma pagamento');
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
      this.router.navigate(['/consCliente' ,  'contasr']);
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
      console.log(this.conta);
      this.contasService.salvarCR( this.conta).subscribe(
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
      this.router.navigate(['/consreceber']);
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

