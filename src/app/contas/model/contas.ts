import { Formapagamento } from './../../formapagamento/model/formapagamento';
import { Planocontas } from 'src/app/planocontas/model/planoconta';
import { Instituicao } from 'src/app/cliente/model/instituicao';

export class Contas {
    idocntas: number;
    documento: string;
    dataemissao: Date;
    datavencimento: Date;
    valorparcela: number;
    desconto: number;
    juros: number;
    datapagamento: Date;
    valorpago: number;
    observacao: string;
    tipo: string;
    instituicao: Instituicao;
    planocontas: Planocontas;
    formapagamento: Formapagamento;
}
