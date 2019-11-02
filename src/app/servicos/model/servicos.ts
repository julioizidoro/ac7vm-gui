import { Planoconta } from 'src/app/planocontas/model/planoconta';
import { Obrafase } from 'src/app/faseobra/model/obrafase';

export class Servicos {

    idservico: number;
    descricao: string;
    conta: string;
    obrafase: Obrafase;
    planoconta: Planoconta;

}
