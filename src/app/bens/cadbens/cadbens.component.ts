import {BensService} from './../bens.service';
import {Planocontas} from 'src/app/planocontas/model/planoconta';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Bens} from '../model/bens';
import {PlanoContasService} from 'src/app/planocontas/planocontas.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Instituicao} from 'src/app/cliente/model/instituicao';
import {ClienteService} from 'src/app/cliente/cliente.service';

@Component({
    selector: 'app-cadbens',
    templateUrl: './cadbens.component.html',
    styleUrls: ['./cadbens.component.css']
})
export class CadbensComponent implements OnInit {

    formulario: FormGroup;
    bens: Bens;
    planoConta: Planocontas;
    instituicaoSelecionada: Instituicao;
    listaPlanoContas: Planocontas[];
    telaSaida = true;
    telaEntrada = true;
    inscricao: Subscription;

    constructor(
        private planocontaservice: PlanoContasService,
        private bensService: BensService,
        private formBuilder: FormBuilder,
        private activeRrouter: ActivatedRoute,
        private router: Router,
        private clienteService: ClienteService
    ) {
    }

    ngOnInit() {
        this.formulario = this.formBuilder.group({
            idbens: [null],
            descricao: [null],
            dataentrada: [null],
            valorentrada: [null],
            datasaida: [null],
            valorsaida: [null],
            diferenca: [null],
            percentual: [null],
            planoconta: [null],
            instituicao: [null]
        });
        this.listarPlanoContas();
        this.instituicaoSelecionada = new Instituicao();
        this.instituicaoSelecionada.nome = '';
        let id;
        let tipo;
        let rota;
        this.inscricao = this.activeRrouter.params.subscribe(params => {
            id = params.id;
            tipo = params.tipo;
            rota = params.rota;
            if (tipo === 'e') {
                this.telaEntrada = false;
                this.telaSaida = true;
            } else if (tipo === 's') {
                this.telaSaida = false;
                this.telaEntrada = true;
            } else if (tipo === 'v') {
                this.telaEntrada = true;
                this.telaSaida = true;
            }
            console.log(this.telaEntrada, this.telaSaida);
            if (rota == null) {
                if (id != null) {
                    this.bensService.getBens(id).subscribe(
                        resposta => {
                            this.bens = resposta as Bens;
                            this.planoConta = this.bens.planoconta;
                            this.instituicaoSelecionada = this.bens.instituicao;
                            this.formulario = this.formBuilder.group({
                                idbens: this.bens.idbens,
                                descricao: this.bens.descricao,
                                dataentrada: this.bens.dataentrada,
                                valorentrada: this.bens.valorentrada,
                                datasaida: this.bens.datasaida,
                                valorsaida: this.bens.valorsaida,
                                diferenca: this.bens.diferenca,
                                percentual: this.bens.percentual,
                                planoconta: this.bens.planoconta,
                                instituicao: this.bens.instituicao
                            });
                        },
                        error => {
                            console.log(error.error.erros.join(' '));
                        }
                    );
                } else {
                    this.formulario = this.formBuilder.group({
                        idbens: [null],
                        descricao: [null],
                        dataentrada: [null],
                        valorentrada: [null],
                        datasaida: [null],
                        valorsaida: [null],
                        diferenca: [null],
                        percentual: [null],
                        planoconta: [null],
                        instituicao: [null],
                    });
                }
            } else {
                if (rota === 'conscliente') {
                    this.clienteService.pesquisarId(id).subscribe(
                        resposta => {
                            this.instituicaoSelecionada = resposta as Instituicao;
                            this.formulario = this.formBuilder.group({
                                idbens: [null],
                                descricao: [null],
                                dataentrada: [null],
                                valorentrada: [null],
                                datasaida: [null],
                                valorsaida: [null],
                                diferenca: [null],
                                percentual: [null],
                                planoconta: [null],
                                instituicao: this.instituicaoSelecionada
                            });
                        },
                        error => {
                            console.log(error.error.erros.join(' '));
                        }
                    );
                }
            }

        });
    }

    compararPalnoConta(obj1, obj2) {
        return obj1 && obj2 ? obj1.idloja === obj2.idloja : obj1 === obj2;
    }

    setPlanoConta() {
        this.planoConta = this.formulario.get('planoconta').value;
    }

    listarPlanoContas() {
        this.planocontaservice.pesquisarBens().subscribe(
            resposta => {
                this.listaPlanoContas = resposta as any;
            }
        );
    }

    salvar() {
        this.bens = this.formulario.value;
        this.bens.instituicao = this.instituicaoSelecionada;
        this.bens.planoconta = this.planoConta;
        this.bensService.salvar(this.bens).subscribe(
            resposta => {
                this.bens = resposta as any;
                this.router.navigate(['/consbens']);
            }
        );
    }

    cancelar() {
        this.formulario.reset();
        this.router.navigate(['/consbens']);
    }

    calcularValores() {
        this.bens.valorsaida = this.formulario.get('valorsaida').value;
        this.bens.valorentrada = this.formulario.get('valorentrada').value;
        this.bens.diferenca = this.bens.valorsaida - this.bens.valorentrada;
        if (this.bens.valorsaida === 0) {
            this.bens.percentual = 0.00;
        } else {
            this.bens.percentual = ((this.bens.diferenca * 100) / this.bens.valorentrada);
        }
        this.formulario = this.formBuilder.group({
            idbens: this.bens.idbens,
            descricao: this.bens.descricao,
            dataentrada: this.bens.dataentrada,
            valorentrada: this.bens.valorentrada,
            datasaida: this.bens.datasaida,
            valorsaida: this.bens.valorsaida,
            diferenca: this.bens.diferenca,
            percentual: this.bens.percentual,
            planoconta: this.bens.planoconta
        });
    }

    consultaCliente() {
        this.router.navigate(['/consCliente', 'bens']);
    }
}
