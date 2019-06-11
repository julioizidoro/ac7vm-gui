import { Planocontas } from '../../planocontas/model/planoconta';
export class Bens {

  idbens: number;
  descricao: string;
  dataentrada: Date;
  valorentrada: number;
  datasaida: Date;
  valorsaida: number;
  diferenca: number;
  percentual: number;
  planoconta: Planocontas;
}
