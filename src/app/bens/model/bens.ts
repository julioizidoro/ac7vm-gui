import { Planoconta } from '../../planocontas/model/planoconta';
import { Instituicao } from 'src/app/cliente/model/instituicao';
export class Bens {

  idbens: number;
  descricao: string;
  dataentrada: Date;
  valorentrada: number;
  datasaida: Date;
  valorsaida: number;
  diferenca: number;
  percentual: number;
  planoconta: Planoconta;
  instituicao: Instituicao;
}
