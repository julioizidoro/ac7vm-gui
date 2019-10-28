import { Fluxocontas } from './fluxoconta';
import { Fluxolancamento } from './fluxolancamento';


export class Fluxocaixa {
    idfluxocaixa: number;
    data: Date;
    entradas: number;
    saidas: number;
    saldoanterior: number;
    saldoatual: number;
    entradasprevistas: number;
    saidasprevistas: number;
    fluxocontas: Fluxocontas[];
    fluxolancamento: Fluxolancamento[];
}