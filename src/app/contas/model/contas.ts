import { Formapagamento } from './../../formapagamento/model/formapagamento';
import { Instituicao } from 'src/app/cliente/model/instituicao';
import { Planocontas } from 'src/app/planocontas/model/planoconta';

export class Contas {
    idocntas: number;
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
    instituicao: Instituicao;
    planocontas: Planocontas;
    formapagamento: Formapagamento;
}
