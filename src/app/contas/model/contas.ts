import { Formapagamento } from './../../formapagamento/model/formapagamento';
import { Instituicao } from 'src/app/cliente/model/instituicao';
import { Planoconta } from 'src/app/planocontas/model/planoconta';
import { Contasarquivos } from './contasarquivos';


export class Contas {
    idcontas: number;
    documento: string;
    dataemissao: Date;
    datavencimento: Date;
    numeroparcela: number;
    valorparcela: number;
    desconto: number;
    juros: number;
    datapagamento: Date;
    valorpago: number;
    observacao: string;
    tipo: string;
    planoconta: Planoconta;
    instituicao: Instituicao;
    formapagamento: Formapagamento;
    codigobarras: string;
    contasarquivosList: Contasarquivos[];
}
